import React, { forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props & React.ButtonHTMLAttributes<Props>> = ({
  url,
  children,
  className,
  ...props
}, ref) => {
  const El = url ? 'a' : 'button';

  return (
    <El
      className={cx(buttonStyles.btn, className)}
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
  tabIndex?: number;
  className?: string;
  children: ReactNode;
}

export default forwardRef<HTMLButtonElement|undefined, Props>(Button);
