import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './../../components/Header';
import Nav from './../../components/Nav';
import Steps from './../../components/Steps';
import PageHeader from './../../components/PageHeader';
import styles from './../../components/Page/page.scss';
import Heading from './../../components/Heading';
import Section from './../../components/Section';
import Generic from './../../components/layouts/Generic';
import Prose from './../../components/Prose';
import Form from './../../components/Form';
import FormField from './../../components/FormField';
import TextInput from './../../components/TextInput';
import Button from './../../components/Button';
import Stack from './../../components/Stack';

storiesOf('Pages/New Contract/Contract Details', module).add('empty', () => (
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
    }
  >
    <div className={styles.form}>
      <div className={styles['form__steps']}>
        <Steps
          activeID="contract"
          steps={[
            {
              id: 'start',
              title: 'Start',
              link: '#',
              status: 'success',
            },
            {
              id: 'contract',
              title: 'Contract',
              link: '#',
            },
            {
              id: 'calendar',
              title: 'Calendar',
              link: '#',
            },
            {
              id: 'tick',
              title: 'Tick size',
              link: '#',
            },
            {
              id: 'price',
              title: 'Price',
              link: '#',
            },
            {
              id: 'ringtrader',
              title: 'Ring trader',
              link: '#',
            },
            {
              id: 'approval',
              title: 'Approval',
              link: '#',
            },
            {
              id: 'submit',
              title: 'Submit',
              link: '#',
            },
          ]}
        />
      </div>
      <div className={styles['form__content']}>
        <Section>
          <Prose>
            <Heading>Contract details</Heading>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>{' '}
              Mauris placerat eleifend leo. Quisque sit amet est et sapien
              ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,{' '}
              <code>commodo vitae</code>, ornare sit amet, wisi. Aenean
              fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
              orci, sagittis tempus lacus enim ac dui.{' '}
              <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
              felis.
            </p>
          </Prose>
          <Form
            initialValues={{
              code: 'FCECSX',
            }}
            validate={() => {}}
            onSubmit={() => {}}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormField name="code" label="Contract code">
                  <TextInput />
                </FormField>

                <Button>Submit</Button>
              </form>
            )}
          </Form>
        </Section>
      </div>
    </div>
  </Generic>
));
