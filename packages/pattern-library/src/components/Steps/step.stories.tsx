import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from '.';

storiesOf('Steps', module)
  .add('default', () => (
    <div style={{ margin: '2rem' }}>
      <Steps
        activeID="secthree"
        steps={[
          {
            id: 'starthere',
            label: 'Start here',
            link: '#',
            steps: [
              {
                id: 'secone',
                label: 'Section one',
                link: '#',
                status: 'success',
              },
              {
                id: 'sectwo',
                label: 'Section two',
                link: '#',
              },
              {
                id: 'secthree',
                label: 'Section three',
                link: '#',
              },
              {
                id: 'secfour_start',
                label: 'Section four',
                link: '#',
              },
            ],
          },
          {
            id: 'contractdeets',
            label: 'Contract details',
            link: '#',
            steps: [
              {
                id: 'sect one cont',
                label: 'Section one',
                link: '#',
              },
            ],
          },
        ]}
      />
    </div>
  ));
