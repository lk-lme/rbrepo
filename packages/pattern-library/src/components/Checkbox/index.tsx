import React from 'react';
import MultipleChoiceInput, { Props } from './../MultipleChoiceInput';

const Checkbox: React.FunctionComponent<Omit<Props, 'type'>> = props => (
  <MultipleChoiceInput type="checkbox" {...props} />
);

export default Checkbox;
