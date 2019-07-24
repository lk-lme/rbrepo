import React from 'react';
import styles from './heading.scss';

// Defaults to an h1 when not used within a <Section />
export const HeadingLevelContext = React.createContext(1);

const Heading: React.FunctionComponent<Props & React.HTMLAttributes<Props>> = ({ level, asLevel, ...props }) => {
  // h6 is the highest valid heading level
  const headingLevel = level || Math.min(React.useContext(HeadingLevelContext), 6);
  const Elem = `h${headingLevel}`;
  // @todo Figure out how to appease TypeScript
  // @link https://github.com/Microsoft/TypeScript/issues/28806
  // @link https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/108
  // @ts-ignore
  return <Elem {...props} className={styles[`h${asLevel || headingLevel}`]} />;
};

type Levels = 1|2|3|4|5|6;

interface Props {
  /** An override to manually specify the heading level element. */
  level?: Levels;
  /** Style the heading as a different level (but not change semantics). */
  asLevel?: Levels;
}

export default Heading;
