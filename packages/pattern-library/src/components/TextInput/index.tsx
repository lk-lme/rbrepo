import React from 'react';

const TextInput: React.FunctionComponent<Props> = ({
  id,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
}) => (
  <input
    id={id}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
   />
);

interface Props {
  name?: string;
  type?: 'text'|'email'|'password'|'tel';
  value?: string;
  id?: string;
  onChange?(e: React.ChangeEvent): void;
  onBlur?(e: React.FocusEvent): void;
}

export default TextInput;
