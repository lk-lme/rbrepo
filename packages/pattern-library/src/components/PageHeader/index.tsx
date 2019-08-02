import React from 'react';
import Heading from './../Heading';
import Badge, { Props as BadgeProps } from './../Badge';
import Button from './../Button';
import styles from './page-header.scss';

const PageHeader: React.FunctionComponent<Props> = ({ title, badges, actions }) => {
  return (
    <div className={styles['page-header']}>
      <div className={styles['page-header__main']}>
        <Heading className={styles['page-header__title']}>
          {title}
        </Heading>
        {badges && (
          <ul className={styles['page-header__badges']}>
            {badges.map((badge) => (
              <li>
                <Badge type={badge.type}>
                  {badge.title}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
      {actions && (
        <ul className={styles['page-header__actions']}>
          {actions.map((action) => (
            <li>
              <Button url={action.url} onClick={action.onClick}>
                {action.title}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface Props {
  title: string;
  badges?: (BadgeProps & {
    title: string;
  })[];
  actions?: {
    title: string;
    url?: string;
    onClick?(e: Event): void;
  }[];
}

export default PageHeader;

