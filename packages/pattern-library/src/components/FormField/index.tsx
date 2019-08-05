import React, { createContext, useEffect, useContext } from 'react';
import { Field as FormikField, FieldProps } from 'formik';
import Field, { Props } from './../Field';
import { FormContext } from './../Form';
import filterChildren from './../../utils/filterChildren';

const FormFieldContext = createContext<FormFieldContextType>({});

export const useFormFieldContext = () => useContext(FormFieldContext);

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hideLabel,
  hint,
  className,
  children,
}) => {
  const { setCurrent } = useContext(FormContext);

  const fieldCount = filterChildren(children, (child: React.ReactChild) => {
    // @todo: Figure out how to appease TSC
    // @ts-ignore
    return child.type ? child.type.isFormInput : false;
  }).length;

  useEffect(() => {
    setCurrent(name, true);

    return () => {
      setCurrent(name, false);
    };
  }, []);

  return (
    <FormikField name={name}>
      {({ field, form: { setFieldValue, errors, touched } }: FieldProps) => {
        const fieldErrors = touched[name] ? (errors[name] as string) : [];

        return (
          <Field
            name={name}
            label={label}
            hideLabel={hideLabel}
            hint={hint}
            errors={fieldErrors}
            isSet={fieldCount > 1}
            className={className}
          >
            <FormFieldContext.Provider
              value={{
                id,
                name,
                label,
                field,
                setFieldValue,
                errors: fieldErrors,
              }}
            >
              {children}
            </FormFieldContext.Provider>
          </Field>
        );
      }}
    </FormikField>
  );
};

type FormFieldContextType = Partial<Pick<Props, 'errors'|'id'|'name'|'label'|'hideLabel'|'className'>> & {
  field?: FieldProps['field'];
  setFieldValue?: FieldProps['form']['setFieldValue'];
};

export default FormField;
