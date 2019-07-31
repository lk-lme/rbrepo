import React, { useRef, createContext } from 'react';
import * as R from 'ramda';
import {
  Formik,
  FormikValues,
  FormikConfig,
  FormikActions,
} from 'formik';
import FormErrors from './../FormErrors';

const Form: React.FunctionComponent<FormikConfig<{}>> = ({ children, initialValues, ...props }) => {
  const currentFields = useRef<{ [x: string]: any }>({});

  /**
   * Updates fields in `currentFields`.
   *
   * @param name The form field name.
   * @param current If the field should be set as mounted or not.
   */
  const setCurrent = (name: string, current: boolean) => {
    if (!current) {
      delete currentFields.current[name];
    } else {
      currentFields.current[name] = {};
    }
  };

  /**
   * Filters an object with field names as keys (e.g. errors or values)
   * to only include fields that are in `currentFields`.
   */
  const filterByCurrent = R.pipe(
    R.toPairs,
    // @ts-ignore
    R.filter(([key]) => R.has(key, currentFields.current)),
    R.fromPairs,
  );

  /**
   * Wrap passed in callbacks.
   */
  const wrapCallbacks = R.pipe(
    /**
     * Only include mounted fields in validation.
     */
    R.when(
      R.has('validate'),
      R.mergeLeft({
        // @ts-ignore
        validate: R.pipe(props.validate, filterByCurrent),
      }),
    ),
    /**
     * Only include mounted fields in submission data.
     */
    R.when(
      R.has('onSubmit'),
      R.mergeLeft({
        onSubmit<T>(values: FormikValues, formikActions: FormikActions<T>) {
          props.onSubmit(filterByCurrent(values), formikActions);
        },
      }),
    ),
  );

  return (
    <FormContext.Provider value={{ currentFields, setCurrent }}>
      <Formik initialValues={initialValues} {...wrapCallbacks(props)} >
        {formikProps => (
          <>
            <FormErrors />
            {
              // @ts-ignore
              children({
                ...formikProps,
                currentFields: currentFields.current,
              })
            }
          </>
        )}
      </Formik>
    </FormContext.Provider>
  );
};

export const FormContext = createContext({
  currentFields: {},
  setCurrent: (name: string, current: boolean) => {},
});

export default Form;
