import React from 'react';
import { storiesOf } from '@storybook/react';
import StepByStep from '.';

storiesOf('StepByStep', module)
  .add('with text', () => (
    <div style={{ padding: '2rem' }}>
      <StepByStep
        allowMultiple
        defaultOpen={['stepOne']}
        steps={[
          {
            id: 'stepOne',
            title: 'Step one',
            description: (
              <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            ),
          },
          {
            id: 'stepTwo',
            title: 'Step two',
            description: 'This is the description for step two.',
          },
          {
            id: 'stepThree',
            title: 'Approval',
            description: 'This is the description for step three.',
          },
        ]}
      />
    </div>
  ));
