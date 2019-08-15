import React from 'react';
import cx from 'classnames';
import Heading from 'Components/core/Heading';
import Icon from 'Components/core/Icon';
import Button, { Props as ButtonProps } from 'Components/core/Button';
import AlertCircleIcon from 'SVG/alert-circle.svg';
import TickCircleIcon from 'SVG/circle-tick.svg';
import InfoIcon from 'SVG/info.svg';
import CancelIcon from 'SVG/cancel.svg';
import styles from './alert.scss';

export const iconMap: { [key in AlertType]: React.ComponentType } = {
  neutral: InfoIcon,
  warning: AlertCircleIcon,
  danger: AlertCircleIcon,
  success: TickCircleIcon,
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

export type AlertType = 'success' | 'neutral' | 'warning' | 'danger';

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
