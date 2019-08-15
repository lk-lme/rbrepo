import React from 'react';
import cx from 'classnames';
import styles from './icon.scss';

const Icon: React.FunctionComponent<Props> = ({ component, size, push, className, ...props }) => {
  const IconComponent = component;
  return (
    <IconComponent
      {...props}
      className={cx(
        styles.icon,
        size === 'sm' && styles['icon--sm'],
        size === 'lg' && styles['icon--lg'],
        push === 'left' && styles['icon--push-left'],
        push === 'right' && styles['icon--push-right'],
        className,
      )}
    />
  );
};

interface Props {
  component: React.FunctionComponent<{ className?: string }>;
  className?: string;
  size?: 'sm'|'lg';
  push?: 'left'|'right';
}

export default Icon;
