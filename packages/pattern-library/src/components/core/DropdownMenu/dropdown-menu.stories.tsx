import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import DropdownMenu from '.';
import Icon from 'Components/core/Icon';
import ChevronDownIcon from 'SVG/chevron-down.svg';
import README from './README.md';

storiesOf('Core/Dropdown Menu', module)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: README } })
  .add('Basic', () => (
    <DropdownMenu
      label={(
        <>
          Action list
          <Icon
            component={ChevronDownIcon}
            push="left"
            size="sm"
          />
        </>
      )}
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
