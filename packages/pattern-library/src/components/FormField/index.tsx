import React from 'react';
import { Field as FormikField, FieldProps } from 'formik';
import Field, { Props } from './../Field';
import Radio from './../Radio';
import Checkbox from './../Checkbox';

function calculateCheckboxSetVal(oldState: string[] = [], newVal: string, checked: boolean) {
  return checked 
    ? [...new Set([...oldState, newVal])]
    : [...oldState].filter(val => val !== newVal);
}

function calculateIsChecked(state: boolean|string|string[] = false, val: string) {
  if (Array.isArray(state)) {
    return state.includes(val);
  }

  if (typeof state === 'string') {
    return state === val;
  }

  return state;
}

function getNewMCIValue(type: any, state: boolean|string|string[], value: string, checked: boolean, isSet: boolean) {
  if (type === Radio || typeof state === 'string') {
    return checked ? value : '';
  }

  // if (typeof value === 'boolean') {
  //   return checked;
  // }

  // if (Array.isArray(value)) {
  //   return calculateCheckboxSetVal(value, childValue, checked);
  // }

  if (isSet) {
    // @ts-ignore
    return calculateCheckboxSetVal(state, value, checked);
  }

  return checked;
}

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hint,
  children,
}) => (
  <FormikField name={name}>
    {({
      field: { value, ...fieldProps },
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
            const {
              type,
              props: { value: childValue },
            } = child;

            return React.cloneElement(child, {
              id,
              ...fieldProps,
              value,
              ...(type === Radio || type === Checkbox
                ? {
                    checked: calculateIsChecked(value, childValue),
                    onChange(e: React.ChangeEvent) {
                      const target = e.target as HTMLInputElement;
                      const newValue = getNewMCIValue(
                        type,
                        value,
                        childValue,
                        target.checked,
                        React.Children.count(children) > 1,
                      );
                      setFieldValue(name, newValue);
                    },
                  }
                : {}),
            });
          },
        )}
      </Field>
    )}
  </FormikField>
);

export default FormField;
