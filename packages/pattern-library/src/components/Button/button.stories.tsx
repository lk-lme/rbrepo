import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import Button from '.';
import ButtonReadme from './README.md';

storiesOf('Button', module)
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('with text', () => <Button onClick={() => console.log('test')}>Some text</Button>);
