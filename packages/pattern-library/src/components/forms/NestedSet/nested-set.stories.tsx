import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import README from './README.md';
import NestedSet from '.';

storiesOf('Forms/Nested set', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
      <div>
        Preceding copy
        <NestedSet>
          {faker.lorem.sentences(4)}
        </NestedSet>
      </div>
  ));
