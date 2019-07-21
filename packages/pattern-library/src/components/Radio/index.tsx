import React from 'react';
import MultipleChoiceInput, { Props } from './../MultipleChoiceInput';

const Radio: React.FunctionComponent<Omit<Props, 'type'>> = props => (
  <MultipleChoiceInput type="radio" {...props} />
);

export default Radio;
