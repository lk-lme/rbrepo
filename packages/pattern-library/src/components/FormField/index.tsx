import React from 'react';
import { Field as FormikField, FieldProps } from 'formik';
import Field, { Props } from './../Field';

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hint,
  children,
}) => (
  <FormikField name={name}>
    {({
      field,
      form: { errors, touched, setFieldValue },
    }: FieldProps) => (
      <Field
        name={name}
        label={label}
        hint={hint}
        errors={touched[name] ? String(errors[name]) : []}
      >
        {React.Children.map(
          // @ts-ignore
          children,
          (child: React.ReactElement) => {
            return React.cloneElement(child, {
              id,
              ...field,
              setFieldValue: setFieldValue.bind(null, name),
            });
          },
        )}
      </Field>
    )}
  </FormikField>
);

export default FormField;
