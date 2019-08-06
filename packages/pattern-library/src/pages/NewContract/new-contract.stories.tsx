import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './../../components/Header';
import Nav from './../../components/Nav';
import Steps from './../../components/Steps';
import PageHeader from './../../components/PageHeader';

storiesOf('Pages/New Contract/Contract Details', module).add('empty', () => (
  <div>
    <Header
      user={{
        id: '123',
        name: 'Alexi Jones',
        avatar:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=120&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      }}
    />
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
    <Steps
      activeID="sec2"
      steps={[
        {
          id: 'sec1',
          title: 'Section one',
          link: '#',
          status: 'success',
        },
        {
          id: 'sec2',
          title: 'Section two',
          link: '#',
        },
        {
          id: 'sec3',
          title: 'Section three',
          link: '#',
        },
      ]}
    />
    <PageHeader
      title="New Contract: FCECSX"
      badges={[{ title: 'Draft', type: 'primary' }]}
      actions={[
        {
          title: 'Clone',
        },
        {
          title: 'Export',
        },
        {
          title: 'Delete',
        },
      ]}
    />
  </div>
));
