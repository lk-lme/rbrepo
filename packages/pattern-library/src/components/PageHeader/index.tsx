import React from 'react';
import Heading from './../Heading';
import Badge, { Props as BadgeProps } from './../Badge';
import Button, { Variety as BtnVariety } from './../Button';
import styles from './page-header.scss';

const PageHeader: React.FunctionComponent<Props> = ({
  title,
  badges,
  actions,
}) => (
  <div className={styles['page-header']}>
    <div className={styles['page-header__main']}>
      <Heading className={styles['page-header__title']}>{title}</Heading>
      {badges && (
        <ul className={styles['page-header__badges']}>
          {badges.map(badge => (
            <li key={badge.title}>
              <Badge type={badge.type}>{badge.title}</Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
    {actions && (
      <ul className={styles['page-header__actions']}>
        {actions.map(action => (
          <li key={action.title}>
            <Button
              url={action.url}
              onClick={action.onClick}
              variety={action.variety}
            >
              {action.title}
            </Button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

interface Props {
  title: string;
  badges?: (BadgeProps & {
    title: string;
  })[];
  actions?: {
    title: string;
    url?: string;
    onClick?(e: Event): void;
    variety?: BtnVariety;
  }[];
}

export default PageHeader;

// import React from 'react';
// import cx from 'classnames';
// import Heading from './../Heading';
// import Badge, { Props as BadgeProps } from './../Badge';
// import Button from './../Button';
// import styles from './page-header.scss';
// import uSpace from './../../styles/utilities/_u-space.scss';

// const PageHeader: React.FunctionComponent<Props> = ({
//   title,
//   badges,
//   actions,
// }) => (
//   <div className={cx(styles['page-header'], uSpace['u-space'])} style={{ '--space': '2rem' }}>
//       <div className={cx(styles['page-header__main'], uSpace['u-space'])} style={{ '--context': '2rem' }}>
//         <Heading className={styles['page-header__title']}>{title}</Heading>
//           {badges && (
//             <ul className={cx(styles['page-header__badges'], uSpace['u-space'])} style={{ '--context': '1rem' }}>
//               {badges.map(badge => (
//                 <li key={badge.title}>
//                   <Badge type={badge.type}>{badge.title}</Badge>
//                 </li>
//               ))}
//             </ul>
//           )}
//       </div>
//     {actions && (
//       <ul className={cx(styles['page-header__actions'], uSpace['u-space'])} style={{ '--context': '2rem' }}>
//         {actions.map(action => (
//           <li key={action.title}>
//             <Button url={action.url} onClick={action.onClick}>
//               {action.title}
//             </Button>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// interface Props {
//   title: string;
//   badges?: (BadgeProps & {
//     title: string;
//   })[];
//   actions?: {
//     title: string;
//     url?: string;
//     onClick?(e: Event): void;
//   }[];
// }

// export default PageHeader;
