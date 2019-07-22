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
  /** The form field name that data will be stored under. */
  name?: string;
  /** The plain-text based input options.  */
  type?: 'text'|'email'|'password'|'tel';
  /** The controlled string value */
  value?: string;
  id?: string;
  /** The callback function run when the input is checked/un-checked. */
  onChange?(e: React.ChangeEvent): void;
  onBlur?(e: React.FocusEvent): void;
}

export default TextInput;
