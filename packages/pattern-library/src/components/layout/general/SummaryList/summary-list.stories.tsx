import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import SummaryList from '.';

storiesOf('Core/Summary List', module)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <SummaryList
      items={[
        { id: 'bronze', name: 'Bronze' },
        { id: 'silver', name: 'Silver' },
        { id: 'gold', name: 'Gold' },
      ]}
      renderItem={({ name }) => name}
    />
  ));
