import React from 'react';
import cx from 'classnames';
import Heading from './../Heading';
import Icon from './../Icon';
import AlertCircleIcon from './../../svg/alert-circle.svg';
import CircleTickIcon from './../../svg/circle-tick.svg';
import InfoIcon from './../../svg/info.svg';
import CancelIcon from './../../svg/cancel.svg';
import Button, { Props as ButtonProps } from './../Button';
import styles from './alert.scss';

const iconMap: { [key in AlertType]: React.ComponentType } = {
  neutral: InfoIcon,
  warning: AlertCircleIcon,
  danger: AlertCircleIcon,
  success: CircleTickIcon,
};

const Alert: React.FunctionComponent<Props> = ({
  type = 'neutral',
  icon,
  title,
  actions,
  onDismiss,
  children,
}) => {
  return (
    <div
      className={
        // @ts-ignore
        // @todo: How to appease TSC?
        cx(styles.alert, styles[`alert--${type}`])
      }
    >
      {onDismiss && (
        <Button
          onClick={onDismiss}
          className={styles.dismiss}
          variety="naked"
        >
          <Icon
            className={styles['dismiss__icon']}
            aria-hidden={true}
            component={CancelIcon}
          />
        </Button>
      )}
      <Icon className={styles.icon} component={icon || iconMap[type]} />
      <div className={styles.body}>
        <Heading className={styles['alert__title']}>{title}</Heading>
        <div>{children}</div>
        {actions && (
          <ul className={styles.actions}>
            {actions.map(action => (
              <li key={action.id}>
                <Button
                  url={action.url}
                  onClick={action.onClick}
                  variety={action.variety}
                >
                  {action.title}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

type AlertType = 'success' | 'neutral' | 'warning' | 'danger';

interface Props {
  title: string;
  type?: AlertType;
  icon?: React.ComponentType;
  actions?: (Pick<ButtonProps, 'onClick' | 'url' | 'variety'> & {
    id: string;
    title: string;
  })[];
  onDismiss?(): void;
}

export default Alert;
