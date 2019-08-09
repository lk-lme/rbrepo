import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import Alert from '.';
import YenStatementIcon from './yen-statement.svg';

storiesOf('Alert', module)
  .add('netural', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('success', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        type="success"
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('warning', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        type="warning"
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('danger', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        type="danger"
        title={Case.capital(faker.lorem.words(5))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('with dismiss button', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        onDismiss={() => alert('Closing')}
        type="neutral"
        title={Case.capital(faker.lorem.words(2))}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('with actions', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        onDismiss={() => alert('Closing')}
        type="success"
        title={Case.capital(faker.lorem.words(2))}
        actions={[
          {
            id: 'view',
            title: 'View',
            variety: 'primary',
          },
          {
            id: 'remind',
            title: 'Remind me later',
            variety: 'outline',
          },
        ]}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ))
  .add('custom icon', () => (
    <div style={{ padding: '2rem', maxWidth: '40rem' }}>
      <Alert
        type="neutral"
        title={Case.capital(faker.lorem.words(2))}
        icon={YenStatementIcon}
      >
        {faker.lorem.paragraph()}
      </Alert>
    </div>
  ));

