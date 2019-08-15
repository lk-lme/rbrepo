import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import WorkflowList from '.';
import README from './README.md';

storiesOf('Core/Workflow List', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <WorkflowList
      stages={[
        {
          id: 'foureyes',
          title: 'Send for 4-eyes check',
          deadline: '2019-03-19',
          status: {
            type: 'neutral',
            label: 'Waiting',
          },
          dependencies: [
            {
              id: 'checkerone',
              title: 'Checker one',
              completed: '2019-03-19',
              status: {
                type: 'success',
                label: 'Done',
              },
            },
            {
              id: 'checkertw',
              title: 'Checker two',
              deadline: '2019-03-19',
              status: {
                type: 'danger',
                label: 'Rejected',
              },
            }
          ],
        },
        {
          id: 'preprod',
          title: 'Load onto Pre-production environement',
          deadline: '2019-03-13',
          status: {
            type: 'neutral',
            label: 'Waiting',
          },
        },
        {
          id: 'checks',
          title: 'Conduct pre-production checks (PTO)',
          deadline: '2019-03-13',
          status: {
            type: 'neutral',
            label: 'Waiting',
          },
        },
        {
          id: 'feedback',
          title: 'Request stackeholder feedback',
          deadline: '2019-03-14',
          status: {
            type: 'neutral',
            label: 'Waiting',
          },
          dependencies: [
            {
              id: 'stackeholderone',
              title: 'Stakeholder one',
              deadline: '2019-03-14',
              status: {
                type: 'neutral',
                label: 'Waiting',
              },
            },
            {
              id: 'stackeholdertwo',
              title: 'Stakeholder one',
              deadline: '2019-03-14',
              status: {
                type: 'neutral',
                label: 'Waiting',
              },
            }
          ]
        },
        {
          id: 'productionload',
          title: 'Load onto production environment',
          deadline: '2019-03-16',
          status: {
            type: 'neutral',
            label: 'Waiting',
          },
        },
        {
          id: 'confirmchanges',
          title: 'Confirm changes',
          deadline: '2019-03-16',
          status: {
            type: 'neutral',
            label: 'Waiting',
          },
        }
      ]}
    />
  ));
