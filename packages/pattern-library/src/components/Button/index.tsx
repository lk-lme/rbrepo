import React, { forwardRef, ReactNode } from 'react';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props & React.HTMLAttributes<Props>> = ({
  url,
  children,
  ...props
}, ref) => {
  const El = url ? 'a' : 'button';

  return (
    <El
      className={buttonStyles.btn}
      href={url}
      ref={ref}
      {...props}
    >
      {children}
    </El>
  );
};

interface Props {
  onClick?(e: Event): void;
  onKeyDown?(e: KeyboardEvent): void;
  url?: string;
  children: ReactNode;
}

export default forwardRef<HTMLButtonElement|undefined, Props>(Button);
