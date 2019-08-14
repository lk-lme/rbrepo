import React from 'react';
import styles from './generic.scss';

const Generic: React.FunctionComponent<Props> = ({
  headerComponent,
  subHeaderComponent,
  pageHeaderComponent,
  children,
}) => (
  <div className={styles.wrapper}>
    {headerComponent}
    <div className={styles['sub-header']}>
      {subHeaderComponent}
    </div>
    <div className={styles['page-header']}>
      {pageHeaderComponent}
    </div>
    <div className={styles.main}>
      {children}
    </div>
  </div>
);

interface Props {
  headerComponent: React.ReactNode;
  subHeaderComponent: React.ReactNode;
  pageHeaderComponent: React.ReactNode;
}

export default Generic;
