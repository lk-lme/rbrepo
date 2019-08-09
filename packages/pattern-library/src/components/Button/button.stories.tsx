import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import Button from '.';
import ButtonReadme from './README.md';

storiesOf('Button/Style', module)
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('primary', () => (
    <div style={{ padding: '2rem' }}>
      <Button variety="primary">
        Primary
      </Button>
      <Button variety="primary" disabled>
        Disabled
      </Button>
    </div>
  ))
  .add('secondary', () => (
    <div style={{ padding: '2rem' }}>
      <Button variety="secondary">
        Secondary
      </Button>
      <Button variety="secondary" disabled>
        Disabled
      </Button>
    </div>
  ))
  .add('outline', () => (
    <div style={{ padding: '2rem' }}>
      <Button variety="outline">
        Outline
      </Button>
      <Button variety="outline" disabled>
        Disabled
      </Button>
    </div>
  ))
  .add('naked', () => (
    <div style={{ padding: '2rem' }}>
      <Button variety="naked">
        Naked
      </Button>
      <Button variety="naked" disabled>
        Disabled
      </Button>
    </div>
  ));

storiesOf('Button/Size', module)
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('small', () => (
    <div style={{ padding: '2rem' }}>
      <Button variety="primary" size="sm">
        Primary
      </Button>
    </div>
  ))
  .add('large', () => (
    <div style={{ padding: '2rem' }}>
      <Button variety="primary" size="lg">
        Primary
      </Button>
    </div>
  ));



