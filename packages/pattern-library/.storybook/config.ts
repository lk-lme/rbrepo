import { addParameters, addDecorator, configure } from '@storybook/react';
import PaddingDecorator from './decorators/PaddingDecorator';
import lmeTheme from './lme-theme';
// Global styles
import './../src/styles/styles.scss';

addParameters({
  options: {
    theme: lmeTheme,
  },
});

addDecorator(PaddingDecorator);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
