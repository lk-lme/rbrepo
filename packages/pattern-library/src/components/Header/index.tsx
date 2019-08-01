import React from 'react';
import Link from './../Link';
import styles from './header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Link>LME CRD</Link>
    </header>
  );
};

export default Header;
