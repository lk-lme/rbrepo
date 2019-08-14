import React from 'react';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Steps from '.';

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
    'contract',
    {
      display: 'select',
    },
  );

storiesOf('Core/Navigation/Steps', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <div style={{ maxWidth: '20em' }}>
      <Steps steps={stepData} activeID={getActiveOptions()} />
    </div>
  ));
