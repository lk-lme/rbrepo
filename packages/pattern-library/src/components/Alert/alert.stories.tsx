import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import Alert from '.';
import GitBranchIcon from './../../svg/git-branch.svg';

storiesOf('Alert', module)
  .add('netural', () => (
    <div style={{ padding: '2rem' }}>
      <Alert
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('warning', () => (
    <div style={{ padding: '2rem' }}>
      <Alert
        type="warning"
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('danger', () => (
    <div style={{ padding: '2rem' }}>
      <Alert
        type="danger"
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('custom icon', () => (
    <div style={{ padding: '2rem' }}>
      <Alert
        type="neutral"
        title={Case.capital(faker.lorem.words(2))}
        icon={GitBranchIcon}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ));

