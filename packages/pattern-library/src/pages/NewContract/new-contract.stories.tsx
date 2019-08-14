import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Steps from 'Components/core/Steps';
import Heading from 'Components/core/Heading';
import Section from 'Components/core/Section';
import Prose from 'Components/core/Prose';
import Form from 'Components/forms/Form';
import Button from 'Components/core/Button';
import FormField from 'Components/forms/FormField';
import TextInput from 'Components/forms/TextInput';
import Checkbox from 'Components/forms/Checkbox';
import ProgressArea from 'Components/layout/general/ProgressArea';
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
      <ProgressArea
        sidebarComponent={
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
        }
        contentComponent={
          <Section>
            <Prose>
              <Heading>Trade venues</Heading>
              <p>
                {faker.lorem.paragraph(4)}
              </p>
            </Prose>
            <Form
              initialValues={{ venues: [] }}
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
        }
      />
    </Page>
  ));
