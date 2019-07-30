import React, { createContext, useContext } from 'react';
import { Field as FormikField, FieldProps } from 'formik';
import Field, { Props } from './../Field';
import filterChildren from './../../utils/filterChildren';

const FormFieldContext = createContext<FormFieldContextType>({});

export const useFormFieldContext = () => useContext(FormFieldContext);

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hint,
  children,
}) => {
  const fieldCount = filterChildren(children, (child: React.ReactChild) => {
    // @todo: Figure out how to appease TSC
    // @ts-ignore
    return child.type ? child.type.isFormInput : false;
  }).length;

  return (
    <FormikField name={name}>
      {({ field, form: { setFieldValue, errors, touched } }: FieldProps) => {
        const fieldErrors = touched[name] ? String(errors[name]) : [];

        return (
          <Field
            name={name}
            label={label}
            hint={hint}
            errors={fieldErrors}
            isSet={fieldCount > 1}
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

type FormFieldContextType = Partial<Pick<Props, 'errors'|'id'|'name'|'label'>> & {
  field?: FieldProps['field'];
  setFieldValue?: FieldProps['form']['setFieldValue'];
};

export default FormField;
