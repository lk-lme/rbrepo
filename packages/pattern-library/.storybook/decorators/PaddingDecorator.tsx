import React from 'react';

const styles = { padding: '2rem' };

/**
 * A StoryBook decorator that adds a bit of padding around a component. 
 */
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

export default PaddingDecorator;
