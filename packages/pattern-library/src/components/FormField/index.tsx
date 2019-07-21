import React, { ReactElement } from 'react';
import { Formik, Form, Field as FormikField, FieldProps } from 'formik';
import Field, { Props } from './../Field';

const FormField: React.FunctionComponent<Props> = ({ name, id = name, label, hint, children }) => {
  const isSet = React.Children.count(children) > 1;

  return (
    <FormikField name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        const { value, ...fieldProps } = field;

        return (
          <Field
            name={name}
            label={label}
            hint={hint}
            errors={touched[name] ? String(errors[name]) : []}
          >
            {React.Children.map(children, (child: React.ReactNode) => (
              // @ts-ignore
              React.cloneElement(child, {
                id,
                ...fieldProps,
                ...(!isSet ? { value } : {})
              })
            ))}
          </Field>
        );
      }}
    </FormikField>
  );
};

export default FormField;
