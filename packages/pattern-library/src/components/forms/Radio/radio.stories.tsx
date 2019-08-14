import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Radio from '.';

storiesOf('Forms/Multiple Choice/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <Radio
      label={text('Label', 'Accept terms')}
      checked={boolean('Checked', false)}
      onChange={action('Fired onChange')}
    />
  ));
