import React, { cloneElement } from 'react';
import cx from 'classnames';
import styles from './stack.scss';

const Stack: React.FunctionComponent<Props> = ({
  children,
  spacing,
  inline,
  ...props
}) => (
  <div
    className={cx(
      styles.stack,
      spacing === 'loose' && styles['stack--loose'],
      spacing === 'tight' && styles['stack--tight'],
      inline && styles['stack--inline'],
    )}
    {...props}
  >
    {
      Array.isArray(children) ? children.map((child, i) => (
        <div key={i}>{cloneElement(child)}</div>
      )) : <div>{children}</div>
    }
  </div>
);

interface Props {
  spacing?: 'normal' | 'tight' | 'loose';
  inline?: boolean;
}

export default Stack;
