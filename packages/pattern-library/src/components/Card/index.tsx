import React from 'react';
import styles from './card.scss';

const Card: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

const Section: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles['card__section']}>
      {children}
    </div>
  );
};

Card.Section = Section;

export default Card;
