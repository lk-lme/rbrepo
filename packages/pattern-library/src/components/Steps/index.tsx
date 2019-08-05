import React from 'react';
import cx from 'classnames';
import styles from './steps.scss';
import Link from './../Link';
import CheckIcon from './../../svg/check-circle.svg';

const iconMap = {
  success: CheckIcon,
};

const Steps: React.FunctionComponent<Props> = ({ steps, activeID }) => {
  return (
    <div>
      {renderSteps(steps, activeID)}
    </div>
  );
};

function isParentOfActive(steps: StepType[], activeID?: string): boolean {
  return steps.some((step) => {
    if (step.id === activeID) return true;
    if (step.steps) return isParentOfActive(step.steps, activeID);
    return false;
  });
}

function renderSteps(sections: StepType[], activeID?: string) {
  if (!sections) return null;

  return (
    <ol className={styles['steps__section']}>
      {sections.map(({ id, steps, title, status }) => (
        <li
          className={cx(styles['steps__step'], {
            [styles['steps__step--is-active']]: activeID === id || (steps ? isParentOfActive(steps, activeID) : null),
          })}
        >
          {/* @todo: add link href etc */}
          <Link className={styles['steps__step-title']}>
            <span className={styles['steps__step-status']}>
              {(() => {
                // @todo Refactor
                const StatusIcon = iconMap[status];
                if (!StatusIcon) return null;
                return <StatusIcon className={styles['steps__step-icon']} />;
              })()}
            </span>
            {title}
          </Link>
          {steps ? renderSteps(steps, activeID) : null}
        </li>
      ))}
    </ol>
  );
}

type StepType = {
  id: string;
  title: string;
  link: any;
  status?: 'success'|'neutral'|'warning';
  steps?: StepType[],
};

interface Props {
  steps: StepType[];
  activeID?: string;
}

export default Steps;

