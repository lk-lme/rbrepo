import React from 'react';
import cx from 'classnames';
import Link from './../Link';
import styles from './nav.scss';

const Nav: React.FunctionComponent<Props> = ({ links, currentID }) => {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav__list']}>
        {links.map(({ title, url, id }) => (
          <li>
            <Link
              className={cx(styles['nav__link'], {
                [styles['nav__link--is-active']]: id === currentID,
              })}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface Props {
  links: {
    id: string;
    url?: string;
    title?: string;
  }[];
  currentID?: string;
}

export default Nav;
