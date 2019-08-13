import React from 'react';
import styles from './summary-list.scss';

const SummaryList: React.FunctionComponent<Props> = ({ items, renderItem }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li key={item.id} className={styles.item}>
        {renderItem(item)}
      </li>
    ))}
  </ul>
);

interface Props {
  items: {
    id: string;
    [x: string]: any;
  }[];
  renderItem(props: { [x: string]: any }): React.ReactNode;
}

export default SummaryList;
