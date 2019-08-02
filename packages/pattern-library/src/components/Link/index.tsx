import React from 'react';

const Link: React.FunctionComponent<Props> = ({ children, activeClassName, className, ...props }) => {
  return (
    <a href="#" className={className}>
      {children}
    </a>
  );
};

interface Props {
  className?: string;
}

export default Link;