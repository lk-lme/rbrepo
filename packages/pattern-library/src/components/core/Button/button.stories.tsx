import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Button from '.';
import Stack from 'Components/core/Stack';
import ButtonReadme from './README.md';

storiesOf('Core/Button/Style', module)
  .addDecorator(PaddingDecorator())
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('Primary', () => (
    <Stack>
      <Button variety="primary">
        Primary
      </Button>
      <Button variety="primary" disabled>
        Disabled
      </Button>
    </Stack>
  ))
  .add('Secondary', () => (
    <Stack>
      <Button variety="secondary">
        Secondary
      </Button>
      <Button variety="secondary" disabled>
        Disabled
      </Button>
    </Stack>
  ))
  .add('Outline', () => (
    <Stack>
      <Button variety="outline">
        Outline
      </Button>
      <Button variety="outline" disabled>
        Disabled
      </Button>
    </Stack>
  ))
  .add('Naked', () => (
    <Stack>
      <Button variety="naked">
        Naked
      </Button>
      <Button variety="naked" disabled>
        Disabled
      </Button>
    </Stack>
  ));

storiesOf('Core/Button/Size', module)
  .addDecorator(PaddingDecorator())
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('Small', () => (
    <Button variety="primary" size="sm">
      Primary
    </Button>
  ))
  .add('Large', () => (
    <Button variety="primary" size="lg">
      Primary
    </Button>
  ));



