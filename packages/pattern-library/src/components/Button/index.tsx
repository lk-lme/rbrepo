import React, { memo, forwardRef, ReactNode } from 'react';
import cx from 'classnames';
import buttonStyles from './button.scss';

const Button: React.FunctionComponent<Props & React.ButtonHTMLAttributes<Props>> = ({
  url,
  variety,
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
      {...props}
    >
      {children}
    </El>
  );
};

Button.defaultProps = {
  variety: 'normal',
};

export type Variety = 'normal'|'naked';

interface Props {
  onClick?(e: Event): void;
  onKeyDown?(e: KeyboardEvent): void;
  variety?: 'normal'|'naked';
  url?: string;
  tabIndex?: number;
  className?: string;
  children: ReactNode;
}

export default memo(forwardRef<HTMLButtonElement|undefined, Props>(Button));
