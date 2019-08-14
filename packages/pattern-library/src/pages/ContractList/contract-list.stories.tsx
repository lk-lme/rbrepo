import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Header from 'Components/core/Header';
import Nav from 'Components/core/Nav';
import PageHeader from 'Components/core/PageHeader';
import SummaryItem from 'Components/core/SummaryItem';
import SummaryList from 'Components/layout/general/SummaryList';
import Generic from 'Components/layout/page/Generic';

storiesOf('Pages', module).add('Contract list', () => (
  <Generic
    headerComponent={
      <Header
        user={{
          id: '123',
          name: 'Alexi Jones',
          avatar:
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=120&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        }}
      />
    }
    subHeaderComponent={
      <Nav
        activeID="contracts"
        links={[
          {
            id: 'dashboard',
            title: 'Dashboard',
          },
          {
            id: 'contracts',
            title: 'Contracts',
          },
          {
            id: 'participants',
            title: 'Participants',
          },
          {
            id: 'instruments',
            title: 'Instruments',
          },
        ]}
      />
    }
    pageHeaderComponent={
      <PageHeader
        title="Contracts"
        actions={[
          {
            title: 'Export all',
            variety: 'naked',
          },
          {
            title: 'Add new contract',
            variety: 'primary',
          },
        ]}
      />
    }
  >
    <SummaryList
      items={[
        {
          id: faker.random.uuid(),
          title: 'AH Future',
          badges: [{ type: 'primary', title: 'New' }],
          date: {
            dateTime: new Date('2019-04-13'),
            renderLabel: (dateStr) =>  `Updated ${dateStr}`,
          },
          actions: [
            {
              id: 'view',
              label: 'View',
            },
            {
              id: 'clone',
              label: 'Clone',
            },
            {
              id: 'delete',
              label: 'Delete',
            },
          ],
        }
      ]}
      renderItem={props => (
        <SummaryItem {...props} />
      )}
    />

      {/* <SummaryItem
        title="AH Future"
        badges={[
          // { type: 'primary', title: 'Draft' },
          // { type: 'warning', title: 'In review' },
          // { type: 'danger', title: 'Rejected' },
          // { type: 'success', title: 'Live' },
        ]}
      /> */}

  </Generic>
));
