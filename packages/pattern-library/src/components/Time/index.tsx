import React from 'react';
import formatDateAsDateTime from './../../utils/formatDateAsDateTime';
import styles from './time.scss';

const Time: React.FunctionComponent<Props> = ({ date, children, ...props }) => {
  const formatted = formatDateAsDateTime(date);
  return (
    <time dateTime={formatted} className={styles.time} {...props}>
      {children || formatted}
    </time>
  );
};

interface Props {
  date: Date;
}

export default Time;
