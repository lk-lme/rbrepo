import React from 'react';

const styles = { padding: '2rem' };

/**
 * A StoryBook decorator that adds a bit of padding around a component. 
 */
const PaddingDecorator = ({ withBG }: { withBG?: boolean } = {}) => storyFn => (
  <div
    style={{
      padding: '2rem',
      ...(withBG ? { backgroundColor: '#f9fafa' } : {}),
    }}
  >
    {storyFn()}
  </div>
);

export default PaddingDecorator;
