import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from '.';

storiesOf('Steps', module)
  .add('flat', () => (
    <div style={{ margin: '2rem' }}>
      <Steps
        activeID="contractdeets"
        steps={[
          {
            id: 'starthere',
            title: 'Start here',
            link: '#',
            status: 'success',
          },
          {
            id: 'contractdeets',
            title: 'Contract details',
            link: '#',
          },
        ]}
      />
    </div>
  ))
  .add('default', () => (
    <div style={{ margin: '2rem' }}>
      <Steps
        activeID="secthree"
        steps={[
          {
            id: 'starthere',
            title: 'Start here',
            link: '#',
            steps: [
              {
                id: 'secone',
                title: 'Section one',
                link: '#',
                status: 'success',
              },
              {
                id: 'sectwo',
                title: 'Section two',
                link: '#',
              },
              {
                id: 'secthree',
                title: 'Section three',
                link: '#',
              },
              {
                id: 'secfour_start',
                title: 'Section four',
                link: '#',
              },
            ],
          },
          {
            id: 'contractdeets',
            title: 'Contract details',
            link: '#',
            steps: [
              {
                id: 'sect one cont',
                title: 'Section one',
                link: '#',
              },
            ],
          },
        ]}
      />
    </div>
  ));
