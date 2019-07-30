import React, { useRef, createContext } from 'react';
import { Formik, FormikConfig } from 'formik';

export const FormContext = createContext({
  currentFields: {},
  setCurrent: (name: string, current: boolean) => {},
});

const Form: React.FunctionComponent<FormikConfig<{}>> = ({
  children,
  onSubmit,
  validate,
  ...props
}) => {
  const currentFields = useRef<{ [x: string]: any }>({});

  const setCurrent = (name: string, current: boolean) => {
    if (current === false) {
      delete currentFields.current[name];
    } else {
      currentFields.current[name] = {};
    }
  };

  return (
    <FormContext.Provider value={{ currentFields, setCurrent }}>
      <Formik
        {...props}
        {...(validate
          ? {
              validate(values) {
                const validationResults = validate(values);
                // @ts-ignore
                return (
                  // @ts-ignore
                  Object.keys(validationResults)
                    // @ts-ignore
                    .filter(key => currentFields.current[key])
                    // @ts-ignore
                    .map(key => ({ [key]: validationResults[key] }))
                    // @ts-ignore
                    .reduce((acc, x) => ({ ...acc, ...x }), {})
                );
              },
            }
          : {})}
        // @ts-ignore
        onSubmit={(values, formikActions) => {
          const vals = Object.keys(values)
            // @ts-ignore
            .filter(key => currentFields.current[key])
            // @ts-ignore
            .map(key => ({ [key]: values[key] }));

          onSubmit(vals, formikActions);
        }}
      >
        {formikProps => {
          // @ts-ignore
          return children({
            ...formikProps,
            currentFields: currentFields.current,
          });
        }}
      </Formik>
    </FormContext.Provider>
  );
};

export default Form;
