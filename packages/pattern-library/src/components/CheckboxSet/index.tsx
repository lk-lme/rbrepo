import React, { ChangeEventHandler } from 'react';

const CheckboxSet: React.FunctionComponent<Props> = ({ name, value = '', setFieldValue, children }) => {
  const isSet = React.Children.count(children) > 1; 

  return (
    // @ts-ignore
    React.Children.map(children, (child: React.ReactElement) => (
      React.cloneElement(child, {
        name,
        ...(setFieldValue ? {
          onChange(e: React.ChangeEvent) {
            const target = e.target as HTMLInputElement;
            const newVal = !isSet || typeof value === 'boolean'
              ? target.checked
              : (target.checked 
                ? [...new Set([...value, child.props.value])]
                : [...value].filter(val => val !== child.props.value)
              );

            setFieldValue(newVal);
          },
        } : {}),
        checked: Array.isArray(value)
          ? value.includes(child.props.value)
          : Boolean(value),
      })
    ))
  );
};

interface Props {
  name?: string;
  value?: boolean|string[];
  setFieldValue?(value: any): void;
}

export default CheckboxSet;
