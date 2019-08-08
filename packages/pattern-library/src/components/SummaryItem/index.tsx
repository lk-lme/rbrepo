import React from 'react';
import cx from 'classnames';
import Badge, { Props as BadgeProps } from './../Badge';
import Section from './../Section';
import Heading from './../Heading';
import Time from './../Time';
import Link from './../Link';
import { Action } from './../ActionMenu';
import DropdownMenu from './../DropdownMenu';
import styles from './summary-item.scss';

const SummaryItem: React.FunctionComponent<Props> = ({
  title,
  description,
  badges,
  date,
  meta,
  url,
  actions,
}) => (
  <article className={styles.wrapper}>
    <Section>
      <div className={cx(styles.section, styles['section--badges'])}>
        {badges && (
          <ul className={styles.badges}>
            {badges.map(({ type, title }) => (
              <li>
                <Badge type={type}>{title}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={cx(styles.section, styles['section--title'])}>
        <Heading className={styles.title}>
          {url ? <Link>{title}</Link> : title}
        </Heading>
      </div>
      <div className={cx(styles.section, styles['section--description'])}>
        {description}
      </div>
      <div className={cx(styles.section, styles['section--meta'])}>
        {meta && (
          <dl className={styles.meta}>
            {meta.map((metaItem) => (
              <>
                <dt className={styles['meta__title']}>{metaItem.title}</dt>
                <dd className={styles['meta__definition']}>{metaItem.definition}</dd>
              </>
            ))}
          </dl>
        )}
      </div>
      <div className={cx(styles.section, styles['section--date'])}>
        {date &&
          (() => {
            const dateTxt = (
              <>
                Last modified <Time date={date.dateTime} />
              </>
            );
            if (!date.url) return dateTxt;
            return <Link>{dateTxt}</Link>;
          })()}
      </div>
      <div className={cx(styles.section, styles['section--actions'])}>
        {actions && (
          <DropdownMenu
            classNames={{ button: styles['action-btn'] }}
            label="Actions"
            actions={actions}
          />
        )}
      </div>
    </Section>
  </article>
);

interface Props {
  title: string;
  url?: string;
  meta?: {
    title: string;
    definition: string;
  }[];
  description?: string;
  date?: {
    dateTime: Date;
    renderLabel?: (dateStr: string) => string;
    url?: string;
  };
  badges?: (BadgeProps & {
    title: string;
  })[];
  actions?: Action[];
}

export default SummaryItem;
