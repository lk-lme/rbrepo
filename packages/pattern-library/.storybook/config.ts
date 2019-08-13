import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import lmeTheme from './lme-theme';
// Global styles
import './../src/styles/styles.scss';

addDecorator(addReadme);

addParameters({
  options: {
    theme: lmeTheme,
  },
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
