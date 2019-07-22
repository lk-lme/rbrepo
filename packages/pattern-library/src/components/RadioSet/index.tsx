import React, { ChangeEventHandler } from 'react';

const RadioSet: React.FunctionComponent<Props> = ({ name, value = '', onChange = () => {}, children }) => {
  return (
    <div>
      {
      // @ts-ignore
      React.Children.map(children, (child: React.ReactElement) => (
        React.cloneElement(child, {
          name,
          onChange,
          checked: value === child.props.value,
        })
      ))}
    </div>
  );
};

interface Props {
  name?: string;
  value?: string;
  onChange?(x: any): ChangeEventHandler;
  setFieldValue?(value: any): void;
}

export default RadioSet;
