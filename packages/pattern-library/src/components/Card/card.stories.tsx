import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Card', module)
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
