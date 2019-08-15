import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Button from 'Components/core/Button';
import README from './README.md';
import FormActions from '.';

storiesOf('Forms/Form actions', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <div>
      Preceding copy
      <FormActions lastSaved={new Date('2019-08-15 13:24:00')}>
        <Button variety="outline">Previous</Button>
        <Button variety="outline">Save draft</Button>
        <Button type="submit">Save and continue</Button>
      </FormActions>
    </div>
  ));
