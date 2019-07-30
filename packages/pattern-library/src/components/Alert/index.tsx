import React from 'react';
import cx from 'classnames';
import Heading from './../Heading';
import XOctagonIcon from './../../svg/x-octagon.svg';
import CheckIcon from './../../svg/check-circle.svg';
import AlertTriangleIcon from './../../svg/alert-triangle.svg';
import Info from './../../svg/info.svg';
import styles from './alert.scss';

const iconMap: { [key in AlertType]: React.ComponentType } = {
  neutral: Info,
  warning: AlertTriangleIcon,
  danger: XOctagonIcon,
  success: CheckIcon,
};

const Alert: React.FunctionComponent<Props> = ({ type = 'neutral', icon, title, children }) => {
  const Icon = icon || iconMap[type];

  return (
    <div
      className={
        // @ts-ignore
        // @todo: How to appease TSC?
        cx(styles.alert, styles[`alert--${type}`])
      }
    >
      <Icon />
      <Heading className={styles['alert__title']}>
        {title}
      </Heading>
      {children}
    </div>
  );
};

type AlertType = 'success'|'neutral'|'warning'|'danger';

interface Props {
  title: string;
  type?: AlertType;
  icon?: React.ComponentType;
}

export default Alert;
