import React from 'react';
import cx from 'classnames';
import styles from './icon.scss';

const Icon: React.FunctionComponent<Props> = ({ component, className }) => {
  const IconComponent = component;
  return <IconComponent className={cx(styles.icon, className)} />;
};

interface Props {
  component: React.FunctionComponent<{ className?: string }>;
  className?: string;
}

export default Icon;
