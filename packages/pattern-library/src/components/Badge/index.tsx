import React from 'react';
import cx from 'classnames';
import styles from './badge.scss';

const Badge: React.FunctionComponent<Props> = ({ children, type }) => (
  <span
    className={cx(styles.badge, {
      [styles[`badge--${type}`]]: type,
    })}
  >
    {children}
  </span>
);

type Type = 'success'|'primary'|'danger'|'warning';

export interface Props {
  type: Type;
}

export default Badge;
