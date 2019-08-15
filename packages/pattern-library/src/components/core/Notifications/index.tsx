import React from 'react';
import cx from 'classnames';
import Icon from 'Components/core/Icon';
import Link from 'Components/core/Link';
import { AlertType, iconMap } from 'Components/core/Alert';
import styles from './notifications.scss';

const Notifications: React.FunctionComponent<Props> = ({ items = [] }) => {
  const hasItems = items && items.length;
  return (
    <>
      <ol className={styles.list}>
        {hasItems ? (
          items.map(({ type, message, url }) => (
            <li
              className={cx(
                styles.item,
                type === 'warning' && [styles['item--warning']],
                type === 'danger' && [styles['item--danger']],
                type === 'success' && [styles['item--success']],
              )}
            >
              <Link to="#" className={styles.content}>
                <Icon className={styles.icon} component={iconMap[type]} />
                <span className={styles.message}>{message}</span>
              </Link>
            </li>
          ))
        ) : (
          <div className={styles['empty-message']}>No new notifications.</div>
        )}
      </ol>
      <Link to="#" className={styles.more}>See all notifications</Link>
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
