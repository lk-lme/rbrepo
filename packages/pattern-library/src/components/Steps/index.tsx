import React from 'react';
import cx from 'classnames';
import styles from './steps.scss';
import Link from './../Link';
import Icon from './../Icon';
import CheckIcon from './../../svg/circle-tick.svg';

const iconMap = {
  success: CheckIcon,
};

const Steps: React.FunctionComponent<Props> = ({ steps, activeID }) => (
  <ol className={styles.steps}>
    {steps.map(({ id, title, status }) => (
      <li
        className={cx(styles['steps__step'],  {
          [styles['steps__step--success']]: status === 'success',
          [styles['steps__step--is-active']]: activeID === id,
        })}
      >
        {/* @todo: add link href etc */}
        <Link className={styles['steps__step-title']}>
          <span className={styles['steps__step-status']}>
            <span className={styles['steps__step-indicator']}>
              {(() => {
                // @todo Refactor
                const StatusIcon = iconMap[status];
                if (!StatusIcon) return null;
                return <Icon className={styles['steps__step-icon']} component={StatusIcon} />;
              })()}
            </span>
          </span>
          <span className={styles['steps__step-label']}>
            {title}
          </span>
        </Link>
      </li>
    ))}
  </ol>
);

type StepType = {
  id: string;
  title: string;
  link: any;
  status?: 'success'|'neutral'|'warning';
};

interface Props {
  steps: StepType[];
  activeID?: string;
}

export default Steps;

