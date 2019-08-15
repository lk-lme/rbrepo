import React from 'react';
import cx from 'classnames';
import styles from './steps.scss';
import Link from 'Components/core/Link';
import Icon from 'Components/core/Icon';
import CheckIcon from 'SVG/circle-tick.svg';
import AlertCircleIcon from 'SVG/alert-circle.svg';

const iconMap = {
  success: CheckIcon,
  warning: AlertCircleIcon,
};

const Steps: React.FunctionComponent<Props> = ({ steps, activeID }) => (
  <ol className={styles.steps}>
    {steps.map(({ id, title, link, status }) => (
      <li
        key={id}
        className={cx(styles['steps__step'], {
          [styles['steps__step--success']]: status === 'success',
          [styles['steps__step--warning']]: status === 'warning',
          [styles['steps__step--is-active']]: activeID === id,
        })}
      >
        <Link to={link} className={styles['steps__step-title']}>
          <span className={styles['steps__step-status']}>
            <span className={styles['steps__step-indicator']}>
              {(() => {
                const StatusIcon = iconMap[status];
                if (!StatusIcon) return null;
                return (
                  <Icon
                    className={styles['steps__step-icon']}
                    component={StatusIcon}
                  />
                );
              })()}
            </span>
          </span>
          <span className={styles['steps__step-label']}>{title}</span>
        </Link>
      </li>
    ))}
  </ol>
);

type StepType = {
  id: string;
  title: string;
  link: any;
  status?: 'success' | 'warning';
};

interface Props {
  steps: StepType[];
  activeID?: string;
}

export default Steps;
