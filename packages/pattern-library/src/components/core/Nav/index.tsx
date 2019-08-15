import React from 'react';
import cx from 'classnames';
import Link from 'Components/core/Link';
import styles from './nav.scss';

const Nav: React.FunctionComponent<Props> = ({ links, activeID }) => (
  <nav className={styles['nav']}>
    <ul className={styles['nav__list']}>
      {links.map(({ title, url, id }) => (
        <li key={id}>
          <Link
            to={url}
            className={cx(styles['nav__link'], {
              [styles['nav__link--is-active']]: id === activeID,
            })}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

interface Props {
  links: {
    id: string;
    url: string;
    title?: string;
  }[];
  activeID?: string;
}

export default Nav;
