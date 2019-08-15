import React from 'react';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Steps from '.';
import README from './README.md';

const stepData = [
  {
    id: 'starthere',
    title: 'Start here',
    link: '#',
    status: 'success',
  },
  {
    id: 'contract',
    title: 'Contract',
    link: '#',
    status: 'warning',
  },
  {
    id: 'calendar',
    title: 'Calendar',
    link: '#',
  },
  {
    id: 'tick',
    title: 'Tick size',
    link: '#',
  },
  {
    id: 'price',
    title: 'Price',
    link: '#',
  },
  {
    id: 'ringtrader',
    title: 'Ring trader',
    link: '#',
  },
  {
    id: 'approval',
    title: 'Approval',
    link: '#',
  },
];

const getActiveOptions = () =>
  options(
    'Active item',
    R.pipe(
      R.indexBy(R.prop('title')),
      R.map(R.prop('id')),
    )(stepData),
    'calendar',
    {
      display: 'select',
    },
  );

storiesOf('Core/Navigation/Steps', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <div style={{ maxWidth: '20em' }}>
      <Steps steps={stepData} activeID={getActiveOptions()} />
    </div>
  ));
