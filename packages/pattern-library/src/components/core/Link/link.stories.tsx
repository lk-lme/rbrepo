import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Link from '.';
import README from './README.md';

storiesOf('Core/Link', module)
  .addDecorator(PaddingDecorator())
  .addDecorator(withKnobs)
  .addParameters({ readme: { sidebar: README } })
  .add('Base', () => (
    <Link to="#">{text('Text', 'A link')}</Link>
  ));
