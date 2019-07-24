import React from 'react';
import cx from 'classnames';
import styles from './prose.scss';

const Prose: React.FunctionComponent<Props> = ({ className, children, ...props }) => (
  <div className={cx(styles.prose, className)} {...props}>
    {children}
  </div>
);

interface Props {
  className?: string;
}

export default Prose;
