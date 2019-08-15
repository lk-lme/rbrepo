import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import SummaryItem from '.';
import README from './README.md';

storiesOf('Core/Summary Item', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <SummaryItem
      title="AH Future"
      url="#"
      description="Aluminium alloy future"
      meta={[
        {
          title: 'Product code',
          definition: 'AH',
        },
        {
          title: 'Type',
          definition: 'Future',
        },
      ]}
      date={{
        dateTime: new Date(2019, 7, 7),
        renderLabel: dateStr => `Last modified ${dateStr}`,
        url: '#',
      }}
      badges={[
        {
          type: 'primary',
          title: 'New',
        },
      ]}
      actions={[
        {
          id: 'clone',
          label: 'Clone',
        },
        {
          id: 'Delete',
          label: 'Delete',
        },
      ]}
    />
  ));
