import React, { useLayoutEffect, useEffect } from 'react';
import { useFormFieldContext } from './../FormField';

const withFormikField = () =>
  function<T>(Component: React.ComponentType<T>) {
    const WrappedComponent: React.FunctionComponent<T> = (props: any) => {
      const { id, field, setFieldValue, setFieldCount } = useFormFieldContext();

      useLayoutEffect(() => {
        //@ts-ignore
        setFieldCount(count => count + 1);

        return () => {
          // @ts-ignore
          setFieldCount(count => count - 1);
        };
        // @ts-ignore
      }, [setFieldCount,  field.name]);

      return (
        <Component
          id={id}
          {...props}
          {...field}
          setFieldValue={setFieldValue}
        />
      );
    };

    return WrappedComponent;
  };

export default withFormikField;
