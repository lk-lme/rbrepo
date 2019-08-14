import React from 'react';
import cx from 'classnames';
import Heading from 'Components/core/Heading';
import Time from 'Components/core/Time';
import styles from './workflow-list.scss';

const WorkflowList: React.FunctionComponent<Props> = ({ stages }) => {
  return (
    <ol className={styles.list}>
      {stages.map(
        ({ id, title, deadline, completed, status, dependencies }) => (
          <li key={id} className={styles['list__item']}>
            <div className={styles.step}>
              <Heading className={styles['step__heading']} asLevel={3}>
                {title}
              </Heading>
              <span className={styles['step__deadline']}>
                {(completed || deadline) && (
                  <>
                    {completed ? 'On' : 'By'}{' '}
                    <Time date={new Date(completed || deadline)} />
                  </>
                )}
              </span>
              <span className={styles['step__status']}>{status.label}</span>
            </div>
            {dependencies && (
              <ol className={styles.substep}>
                {dependencies.map(dep => (
                  <li
                    key={dep.id}
                    className={cx(
                      styles.step,
                      styles['step--sub'],
                      dep.status.type === 'success' && styles['step--success'],
                      dep.status.type === 'danger' && styles['step--danger'],
                    )}
                  >
                    <Heading className={styles['step__heading']}>
                      {dep.title}
                    </Heading>
                    <span className={styles['step__deadline']}>
                      {(dep.completed || dep.deadline) && (
                        <>
                          {dep.completed ? 'On' : 'By'}{' '}
                          <Time
                            date={new Date(dep.completed || dep.deadline)}
                          />
                        </>
                      )}
                    </span>
                    <span className={styles['step__status']}>
                      {dep.status.label}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ),
      )}
    </ol>
  );
};

type Statuses = 'neutral' | 'danger' | 'success';

type StageType = {
  id: string;
  title: string;
  deadline?: string;
  completed?: string;
  status: {
    label: string;
    type: Statuses;
  };
};

interface Props {
  stages: (StageType & {
    dependencies?: StageType[];
  })[];
}

export default WorkflowList;
