import React from 'react';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props> = ({
  url,
  children,
}) => {
  const El = url ? 'a' : 'button';

  return (
    <El
      className={buttonStyles.btn}
      href={url}
    >
      {children}
    </El>
  );
};

interface Props {
  onClick?(): void;
  url?: string;
}

export default Button;
