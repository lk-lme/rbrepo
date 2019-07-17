import React from 'react';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent = ({ children }) => (
  <button className={buttonStyles.btn}>{children}</button>
);

export default Button;
