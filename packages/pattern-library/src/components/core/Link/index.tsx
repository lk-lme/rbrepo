import React from 'react';

const Link: React.FunctionComponent<Props> = ({ children, to, className }) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

interface Props {
  to: string;
  className?: string;
}

export default Link;
