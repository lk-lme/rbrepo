import React from 'react';
import { HeadingLevelContext } from 'Components/core/Heading';

const Section: React.FunctionComponent = ({ children }) => {
  const headingLevel = React.useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      {children}
    </HeadingLevelContext.Provider>
  );
};

export default Section;
