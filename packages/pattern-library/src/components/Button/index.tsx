import React, { memo, forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props & React.ButtonHTMLAttributes<Props>> = ({
  url,
  variety,
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
};

export type Variety = 'primary'|'secondary'|'outline'|'naked';

interface Props {
  onClick?(e: Event): void;
  onKeyDown?(e: KeyboardEvent): void;
  variety?: Variety;
  disabled?: boolean;
  url?: string;
  tabIndex?: number;
  className?: string;
  children: ReactNode;
}

export default memo(forwardRef<HTMLButtonElement|undefined, Props>(Button));
