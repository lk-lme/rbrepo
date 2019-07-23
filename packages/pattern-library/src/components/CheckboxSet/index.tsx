import React, { createContext } from 'react';

// @ts-ignore
export const CheckboxSetContext =  createContext();

const CheckboxSet: React.FunctionComponent<Props> = ({ name, value = [], setFieldValue = () => {}, children }) => {
  return (
    <CheckboxSetContext.Provider
      value={{
        name,
        fieldValue: value,
        setFieldValue(val: string, checked: boolean) {
          setFieldValue(
            checked
              ? [...new Set([...value, val])]
              : [...value].filter(x => x !== val),
          );
        },
      }}
      children={children}
    />
  );

  // return (
  //   // @ts-ignore
  //   React.Children.map(children, (child: React.ReactElement) => (
  //     React.cloneElement(child, {
  //       name,
  //       ...(setFieldValue ? {
  //         onChange(e: React.ChangeEvent) {
  //           const target = e.target as HTMLInputElement;
  //           const newVal = !isSet || typeof value === 'boolean'
  //             ? target.checked
  //             : (target.checked 
  //               ? [...new Set([...value, child.props.value])]
  //               : [...value].filter(val => val !== child.props.value)
  //             );

  //           setFieldValue(newVal);
  //         },
  //       } : {}),
  //       checked: Array.isArray(value)
  //         ? value.includes(child.props.value)
  //         : Boolean(value),
  //     })
  //   ))
  // );
};

CheckboxSet.defaultProps = {
  value: [],
};

interface Props {
  name?: string;
  value?: string[];
  setFieldValue?(value: any): void;
}

export default CheckboxSet;
