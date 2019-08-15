import React from 'react';
import Stack from 'Components/core/Stack';
import Time from 'Components/core/Time';
import styles from './form-actions.scss';

const formatDateAsTime = (date: Date) => `${date.getHours()}:${date.getMinutes()}`;

const FormActions: React.FunctionComponent<Props> = ({ lastSaved, children }) => (
  <div className={styles.wrapper}>
    {lastSaved && (
      <span className={styles.status}>
        Draft auto-saved at <Time date={lastSaved}>{formatDateAsTime(lastSaved)}</Time>
      </span>
    )}
    <div className={styles.actions}>
      <Stack>{children}</Stack>
    </div>
  </div>
);

interface Props {
  lastSaved: Date;
}

export default FormActions;
