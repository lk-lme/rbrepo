import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './../../components/Header';
import Nav from './../../components/Nav';
import Steps from './../../components/Steps';
import Card from './../../components/Card';
import Button from './../../components/Button';
import Heading from './../../components/Heading';
import Section from './../../components/Section';

storiesOf('Pages/New Contract/Contract Details', module)
  .add('empty', () => (
    <div>
      <Header />
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
      <div>
        <Steps
          activeID="sec2"
          steps={[
            {
              id: 'sec1',
              title: 'Section one',
              link: '#',
              status: 'success'
            },
            {
              id: 'sec2',
              title: 'Section two',
              link: '#'
            },
            {
              id: 'sec3',
              title: 'Section three',
              link: '#'
            },
          ]}
        />
      </div>
      <Card>
        <Heading>New Contract: FCECSX</Heading>
        <Card.Section>
          <Section>
            <Button>
              Next
            </Button>
          </Section>
        </Card.Section>
      </Card>
    </div>
  ));
