import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Button from '.';
import Stack from 'Components/layout/Stack';
import ButtonReadme from './README.md';

const getSizeOptions = () => options(
  'Size',
  {
    Small: 'sm',
    Medium: 'md',
    Large: 'lg',
  },
  'md',
  {
    display: 'inline-radio',
  },
);

const getVarietyOptions = () => options(
  'Variety',
  {
    Primary: 'primary',
    Secondary: 'secondary',
    Outline: 'outline',
    Naked: 'naked',
  },
  'primary',
  {
    display: 'select',
  },
);

storiesOf('Core/Button/Style', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: ButtonReadme } })
  .add('Primary', () => (
    <Stack>
      <Button variety="primary" size={getSizeOptions()}>
        {text('Label', 'Primary')}
      </Button>
      <Button variety="primary" size={getSizeOptions()} disabled>
        {text('Disabled label', 'Disabled')}
      </Button>
    </Stack>
  ))
  .add('Secondary', () => (
    <Stack>
      <Button variety="secondary" size={getSizeOptions()}>
        {text('Label', 'Secondary')}
      </Button>
      <Button variety="secondary" size={getSizeOptions()} disabled>
        {text('Disabled label', 'Disabled')}
      </Button>
    </Stack>
  ))
  .add('Outline', () => (
    <Stack>
      <Button variety="outline" size={getSizeOptions()}>
        {text('Label', 'Outline')}
      </Button>
      <Button variety="outline" size={getSizeOptions()} disabled>
        {text('Disabled label', 'Disabled')}
      </Button>
    </Stack>
  ))
  .add('Naked', () => (
    <Stack>
      <Button variety="naked" size={getSizeOptions()}>
        {text('Label', 'Naked')}
      </Button>
      <Button variety="naked" size={getSizeOptions()} disabled>
        {text('Disabled label', 'Disabled')}
      </Button>
    </Stack>
  ));

storiesOf('Core/Button/Size', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('Small', () => (
    <Button variety={getVarietyOptions()} size="sm">
      {text('Label', 'Label')}
    </Button>
  ))
  .add('Large', () => (
    <Button variety={getVarietyOptions()} size="lg">
      {text('Label', 'Label')}
    </Button>
  ));



