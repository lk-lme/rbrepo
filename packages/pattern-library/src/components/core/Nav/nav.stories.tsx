import React from 'react';
import * as R from 'ramda';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import { storiesOf } from '@storybook/react';
import Nav from '.';
import README from './README.md';

const navItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    url: '#',
  },
  {
    id: 'contracts',
    title: 'Contracts',
    url: '#',
  },
  {
    id: 'participants',
    title: 'Participants',
    url: '#',
  },
  {
    id: 'instruments',
    title: 'Instruments',
    url: '#',
  },
  {
    id: 'admin',
    title: 'Admin',
  },
];

const getNavOptions = () =>
  options(
    'Active item',
    R.pipe(
      R.indexBy(R.prop('title')),
      R.map(R.prop('id')),
    )(navItems),
    'contracts',
    {
      display: 'select',
    },
  );

storiesOf('Core/Navigation/Nav', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Base', () => <Nav activeID={getNavOptions()} links={navItems} />);
