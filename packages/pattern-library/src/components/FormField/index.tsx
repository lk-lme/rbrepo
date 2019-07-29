import React, { createContext, useState, useRef, useCallback, useContext, useEffect } from 'react';
import { Field as FormikField, FieldProps } from 'formik';
import Field, { Props } from './../Field';

const FormFieldContext = createContext<FormFieldContextType>({});

export const useFormFieldContext = () => useContext(FormFieldContext);

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hint,
  children,
}) => {
  const [fieldCount, setFieldCount] = useState(0);

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
                setFieldCount,
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
  setFieldCount?: React.Dispatch<React.SetStateAction<number>>;
};

export default FormField;
