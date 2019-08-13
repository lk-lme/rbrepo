import React from 'react';
import cx from 'classnames';
import Icon from '../Icon/index';
import Link from '../Link/index';
import { AlertType, iconMap } from '../Alert/index';
import styles from './notifications.scss';

const Notifications: React.FunctionComponent<Props> = ({ items = [] }) => {
  const hasItems = items && items.length;
  return (
    <>
      <ol className={styles.list}>
        {hasItems ? items.map(({ type, message, url }) => (
          <li
            className={cx(
              styles.item,
              type === 'warning' && [styles['item--warning']],
              type === 'danger' && [styles['item--danger']],
              type === 'success' && [styles['item--success']],
            )}
          >
            <Link className={styles.content}>
              <Icon className={styles.icon} component={iconMap[type]} />
              <span className={styles.message}>{message}</span>
            </Link>
          </li>
        )): (
          <div className={styles['empty-message']}>
            No new notifications.
          </div>
        )}
      </ol>
      <Link className={styles.more}>
        See all notifications
      </Link>
    </>
  );
};

export type NotificationType = {
  id: string;
  message: string;
  type?: AlertType;
};

interface Props {
  items?: NotificationType[];
}

export default Notifications;
