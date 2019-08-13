import React from 'react';
import { storiesOf } from '@storybook/react';
import Steps from 'Components/Steps';
import styles from 'Components/Page/page.scss';
import Heading from 'Components/Heading';
import Section from 'Components/Section';
import Prose from 'Components/Prose';
import Form from 'Components/Form';
import FormField from 'Components/FormField';
import TextInput from 'Components/TextInput';
import Checkbox from 'Components/Checkbox';
import Button from 'Components/Button';
import Page from './components/Page';

const venues = [
  {
    label: 'Telephone',
    value: 'telephone',
  },
  {
    label: 'Ring',
    value: 'ring',
  },
  {
    label: 'Electronic',
    value: 'electronic',
  },
  {
    label: 'Basis ring',
    value: 'basis-ring',
  },
];

storiesOf('Pages/New Contract', module)
  .add('Overview', () => (
    <Page>
      <div className={styles.form}>
        <div className={styles['form__steps']}>
          <Steps
            activeID="venues"
            steps={[
              {
                id: 'overview',
                title: 'Contract overview',
                link: '#',
                status: 'success',
              },
              {
                id: 'venues',
                title: 'Trading Venues',
                link: '#',
              },
              {
                id: 'currency',
                title: 'Currency',
                link: '#',
              },
              {
                id: 'submission',
                title: 'Submission',
                link: '#',
              },
              {
                id: 'approval',
                title: 'Approval',
                link: '#',
              },
            ]}
          />
        </div>
        <div className={styles['form__content']}>
          <Section>
            <Prose>
              <Heading>Trade venues</Heading>
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
                venues: [],
              }}
              validate={() => {}}
              onSubmit={() => {}}
            >
              {({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FormField name="venues" label="Trade venues">
                    {venues.map(({ label, value }) => (
                      <>
                        <Checkbox
                          label={label}
                          value={value}
                        />
                        {values.venues.includes(value) && (
                          <>
                            <FormField name={`${value}-min-lot`} label="Min lot">
                              <TextInput type="number" />
                            </FormField>
                            <FormField name={`${value}-max-lot`} label="Max lot">
                              <TextInput type="number" />
                            </FormField>
                            <FormField name={`${value}-start-time`} label="VWAP start time">
                              <TextInput type="time" />
                            </FormField>
                            <FormField name={`${value}-end-time`} label="VWAP end time">
                              <TextInput type="time" />
                            </FormField>
                          </>
                        )}
                      </>
                    ))}
                  </FormField>
                  <Button>Submit</Button>
                </form>
              )}
            </Form>
          </Section>
        </div>
      </div>
    </Page>
  ));
