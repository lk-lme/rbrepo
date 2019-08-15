import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Time from '.';
import README from './README.md';

storiesOf('Core/Time', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Default formatting', () => (
    <Time date={new Date('2019-08-12')} />
  ))
  .add('Custom display', () => (
    <Time date={new Date('2019-08-12')}>
      12th August 2019
    </Time>
  ));
