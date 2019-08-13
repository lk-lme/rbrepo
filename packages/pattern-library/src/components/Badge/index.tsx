import React from 'react';
import cx from 'classnames';
import styles from './badge.scss';

const Badge: React.FunctionComponent<Props> = ({ children, type }) => (
  <span
    className={cx(
      styles.badge, 
      type === 'success' && styles['badge--success'],
      type === 'primary' && styles['badge--primary'],
      type === 'danger' && styles['badge--danger'],
      type === 'warning' && styles['badge--warning'],
    )}
  >
    {children}
  </span>
);

type Type = 'success'|'primary'|'danger'|'warning';

export interface Props {
  type?: Type;
}

export default Badge;
