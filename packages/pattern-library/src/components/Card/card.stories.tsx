import React from 'react';
import { addReadme } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import Card from '.';
import CardReadme from './README.md';

storiesOf('Card', module)
  .addDecorator(addReadme)
  .addParameters({
    readme: {
      sidebar: CardReadme,
    },
  })
  .add('default', () => (
    <div style={{ padding: '2rem' }}>
      <Card>
        <Card.Section>
          A section
        </Card.Section>
      </Card>
    </div>
  ))
  .add('multiple sections', () => (
    <div style={{ padding: '2rem' }}>
      <Card>
        <Card.Section>
          A section
        </Card.Section>
        <Card.Section>
          A second section
        </Card.Section>
        <Card.Section>
          A third section
        </Card.Section>
      </Card>
    </div>
  ));
