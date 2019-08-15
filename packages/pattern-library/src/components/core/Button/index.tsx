import React, { memo, forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props & React.ButtonHTMLAttributes<Props>> = ({
  url,
  variety = 'primary',
  size = 'md',
  disabled,
  children,
  className,
  type,
  ...props
}, ref) => {
  const El = url ? 'a' : 'button';

  return (
    <El
      className={cx(buttonStyles.btn, className, {
        [buttonStyles[`btn--${variety}`]]: variety && variety !== 'normal',
        [buttonStyles[`btn--${size}`]]: size && size !== 'md',
      })}
      href={url}
      ref={ref}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </El>
  );
};

export type Variety = 'primary'|'secondary'|'outline'|'naked';
export type Size = 'sm'|'md'|'lg';

export interface Props {
  onClick?(e: Event): void;
  onKeyDown?(e: KeyboardEvent): void;
  variety?: Variety;
  size?: Size;
  disabled?: boolean;
  url?: string;
  tabIndex?: number;
  className?: string;
  type?: 'button'|'submit';
  children: ReactNode;
}

export default memo(forwardRef<HTMLButtonElement|undefined, Props>(Button));
