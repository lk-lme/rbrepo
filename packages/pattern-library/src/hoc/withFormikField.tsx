import React from 'react';
import { useFormFieldContext } from '../components/FormField';

const withFormikField = () =>
  function<T>(Component: React.ComponentType<T>) {
    const WrappedComponent: React.FunctionComponent<T> = (props: any) => {
      const { id, field, setFieldValue } = useFormFieldContext();

      return (
        <Component
          id={id}
          {...props}
          {...field}
          setFieldValue={setFieldValue}
        />
      );
    };

    // @ts-ignore
    WrappedComponent.isFormInput = true;

    return WrappedComponent;
  };

export default withFormikField;
