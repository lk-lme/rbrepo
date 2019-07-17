import React from 'react';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props> = ({ children }) => (
  <button className={buttonStyles.btn}>{children}</button>
);

interface Props {
  onClick?(): void;
  href?: string;
}

export default Button;
