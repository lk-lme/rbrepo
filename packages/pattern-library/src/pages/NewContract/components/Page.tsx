import React from 'react';
import Generic from 'Components/layout/page/Generic';
import Header from 'Components/core/Header';
import Nav from 'Components/core/Nav';
import Link from 'Components/core/Link';
import PageHeader from 'Components/core/PageHeader';

const Page: React.FunctionComponent = ({ children }) => (
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
        title="New Contract: AH Futures"
        badges={[{ title: 'Draft', type: 'primary' }]}
        infoText={(
          <Link>View history</Link>
        )}
        actions={[
          {
            title: 'Clone',
            variety: 'outline',
          },
          {
            title: 'Export',
            variety: 'outline',
          },
          {
            title: 'Delete',
            variety: 'outline',
          },
        ]}
      />
    }
  >
    {children}
  </Generic>
);

export default Page;
