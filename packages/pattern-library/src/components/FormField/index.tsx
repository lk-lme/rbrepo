import React, { ReactElement } from 'react';
import { Formik, Form, Field as FormikField } from 'formik';
import Field, { Props } from './../Field';

interface FormikData {
  field: { [x: string]: string },
  form: {
    errors: { [x: string]: string };
    touched: { [x: string]: string };
  };
}

const FormField: React.FunctionComponent<Props> = ({ name, label, hint, children }) => (
  <FormikField name={name}>
    {({ field, form: { errors, touched } }: FormikData) => {
      console.log(field);
      return (
        <Field
          name={name}
          label={label}
          hint={hint}
          errors={touched[name] ? errors[name] : []}
        >
          {/* {children} */}
          {React.Children.map(children, (child: React.ReactNode) => (
            // @ts-ignore
            React.cloneElement(child, {
              ...field,
            })
          ))}
        </Field>
      );
    }}
  </FormikField>
);

export default FormField;
