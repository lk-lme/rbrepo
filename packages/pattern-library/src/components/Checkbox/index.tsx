import React, { useContext } from 'react';
import MultipleChoiceInput, { Props } from './../MultipleChoiceInput';
import { CheckboxSetContext } from './../CheckboxSet';

const Checkbox: React.FunctionComponent<Omit<Props, 'type'>> = ({ value, ...props }) => {
  const { name, fieldValue, setFieldValue } = useContext(CheckboxSetContext);

  console.log('name is', name);

  const onChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    // const newValue = target.checked 
    //   ? [...new Set([...fieldValue, value])]
    //   : [...fieldValue].filter(val => val !== value);
    // setFieldValue(newValue);
    setFieldValue(value, target.checked);
  };

  console.log(fieldValue);

  return (
    <MultipleChoiceInput
      type="checkbox"
      checked={fieldValue.includes(value)}
      onChange={onChange}
      name={name}
      value={value}
      {...props}
    />
  );
};

export default Checkbox;
