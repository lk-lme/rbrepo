import React from 'react';
import styles from './nested-set.scss';

const NestedSet: React.FunctionComponent = ({ children }) => (
  <fieldset className={styles.wrapper}>
    {children}
  </fieldset>
);

export default NestedSet;
