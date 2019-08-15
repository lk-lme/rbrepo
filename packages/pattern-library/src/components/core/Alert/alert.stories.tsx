import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Alert from '.';
import YenStatementIcon from './yen-statement.svg';
import README from './README.md';

storiesOf('Core/Alert', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Neutral', () => (
    <Alert title={text('Title', Case.capital(faker.lorem.words(5)))}>
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ))
  .add('Success', () => (
    <Alert type="success" title={text('Title', Case.capital(faker.lorem.words(5)))}>
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ))
  .add('Warning', () => (
    <Alert type="warning" title={text('Title', Case.capital(faker.lorem.words(5)))}>
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ))
  .add('Danger', () => (
    <Alert type="danger" title={text('Title', Case.capital(faker.lorem.words(5)))}>
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ))
  .add('With dismiss button', () => (
    <Alert
      onDismiss={action('Close event')}
      type="neutral"
      title={text('Title', Case.capital(faker.lorem.words(2)))}
    >
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ))
  .add('With actions', () => (
    <Alert
      onDismiss={() => alert('Closing')}
      type="success"
      title={text('Title', Case.capital(faker.lorem.words(2)))}
      actions={[
        {
          id: 'view',
          title: 'View',
          variety: 'primary',
          onClick: action('View event'),
        },
        {
          id: 'remind',
          title: 'Remind me later',
          variety: 'outline',
          onClick: action('Remind me event'),
        },
      ]}
    >
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ))
  .add('With custom icon', () => (
    <Alert
      type="neutral"
      title={text('Title', Case.capital(faker.lorem.words(2)))}
      icon={YenStatementIcon}
    >
      {text('Content', faker.lorem.paragraph())}
    </Alert>
  ));
