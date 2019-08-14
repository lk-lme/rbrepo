import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Alert from '.';
import YenStatementIcon from './yen-statement.svg';

storiesOf('Core/Alert', module)
  .addDecorator(PaddingDecorator())
  .add('Neutral', () => (
    <Alert title={Case.capital(faker.lorem.words(5))}>
      {faker.lorem.paragraph()}
    </Alert>
  ))
  .add('Success', () => (
    <Alert type="success" title={Case.capital(faker.lorem.words(5))}>
      {faker.lorem.paragraph()}
    </Alert>
  ))
  .add('Warning', () => (
    <Alert type="warning" title={Case.capital(faker.lorem.words(5))}>
      {faker.lorem.paragraph()}
    </Alert>
  ))
  .add('Danger', () => (
    <Alert type="danger" title={Case.capital(faker.lorem.words(5))}>
      {faker.lorem.paragraph()}
    </Alert>
  ))
  .add('With dismiss button', () => (
    <Alert
      onDismiss={() => alert('Closing')}
      type="neutral"
      title={Case.capital(faker.lorem.words(2))}
    >
      {faker.lorem.paragraph()}
    </Alert>
  ))
  .add('With actions', () => (
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
  ))
  .add('With custom icon', () => (
    <Alert
      type="neutral"
      title={Case.capital(faker.lorem.words(2))}
      icon={YenStatementIcon}
    >
      {faker.lorem.paragraph()}
    </Alert>
  ));
