import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import DropdownMenu from '.';

storiesOf('Core/Dropdown Menu', module)
  .addDecorator(PaddingDecorator())
  .add('Basic', () => (
    <DropdownMenu
      label="Action list"
      actions={[
        {
          id: 'submit',
          label: 'Submit',
        },
        {
          id: 'pending',
          label() {
            return <span>Set Pending</span>;
          },
        },
        {
          id: 'abort',
          label: <span>Complete</span>,
        },
      ]}
    />
  ));
