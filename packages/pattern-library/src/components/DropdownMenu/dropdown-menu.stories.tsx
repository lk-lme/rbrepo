import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownMenu from '.';

storiesOf('Dropdown Menu', module)
  .add('Basic', () => (
    <div style={{ padding: '2rem', minHeight: '60rem', display: 'flex', alignItems: 'center' }}>
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
    </div>
  ));



