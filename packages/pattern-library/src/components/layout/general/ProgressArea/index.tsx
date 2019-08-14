import React from 'react';
import styles from './progress-area.scss';

const ProgressArea: React.FunctionComponent<Props> = ({ sidebarComponent, contentComponent }) => (
  <div className={styles.form}>
    <div className={styles['form__steps']}>
      {sidebarComponent}
    </div>
    <div className={styles['form__content']}>
      {contentComponent}
    </div>
  </div>
);

interface Props {
  sidebarComponent: React.ReactNode;
  contentComponent: React.ReactNode;
}

export default ProgressArea;

