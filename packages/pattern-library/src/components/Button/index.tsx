import React, { memo, forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props & React.ButtonHTMLAttributes<Props>> = ({
  url,
  variety,
  size,
  disabled,
  children,
  className,
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
      {...props}
    >
      {children}
    </El>
  );
};

Button.defaultProps = {
  variety: 'primary',
  size: 'md',
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
  children: ReactNode;
}

export default memo(forwardRef<HTMLButtonElement|undefined, Props>(Button));
