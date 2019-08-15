import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Steps from 'Components/core/Steps';
import Heading from 'Components/core/Heading';
import Section from 'Components/core/Section';
import Prose from 'Components/core/Prose';
import Form from 'Components/forms/Form';
import FormActions from 'Components/forms/FormActions';
import Button from 'Components/core/Button';
import FormField from 'Components/forms/FormField';
import TextInput from 'Components/forms/TextInput';
import Checkbox from 'Components/forms/Checkbox';
import NestedSet from 'Components/forms/NestedSet';
import SelectRepeater from 'Components/forms/SelectRepeater';
import ProgressArea from 'Components/layout/general/ProgressArea';
import Page from './components/Page';
import styles from './page.scss';
import Radio from '../../components/forms/Radio';

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
  .add('Trading venues', () => (
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
            <Prose className={styles.intro}>
              <Heading>Trade venues</Heading>
              <p>{faker.lorem.paragraph(4)}</p>
            </Prose>
            <Form
              initialValues={{ venues: [] }}
              onSubmit={action('Submit fired')}
            >
              {({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FormField name="venues" label="Trade venues">
                    {venues.map(({ label, value }) => (
                      <>
                        <Checkbox label={label} value={value} />
                        {values.venues.includes(value) && (
                          <NestedSet>
                            <FormField name={`${value}-min-lot`} label="Min lot">
                              <TextInput type="number" />
                            </FormField>
                            <FormField name={`${value}-max-lot`} label="Max lot">
                              <TextInput type="number" />
                            </FormField>
                            <FormField
                              name={`${value}-start-time`}
                              label="VWAP start time"
                            >
                              <TextInput type="time" />
                            </FormField>
                            <FormField
                              name={`${value}-end-time`}
                              label="VWAP end time"
                            >
                              <TextInput type="time" />
                            </FormField>
                          </NestedSet>
                        )}
                      </>
                    ))}
                  </FormField>
                  <FormActions lastSaved={new Date('2019-08-15 13:24:00')}>
                    <Button variety="outline">Previous</Button>
                    <Button variety="outline">Save draft</Button>
                    <Button type="submit">Save and continue</Button>
                  </FormActions>
                </form>
              )}
            </Form>
          </Section>
        }
      />
    </Page>
  ))
  .add('Currency', () => (
    <Page>
      <ProgressArea
        sidebarComponent={
          <Steps
            activeID="currency"
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
                status: 'success',
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
            <Prose className={styles.intro}>
              <Heading>Currency</Heading>
              <p>{faker.lorem.paragraph(4)}</p>
            </Prose>
            <Form
              initialValues={{}}
              onSubmit={action('Submit fired')}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  {venues.map((venue) => (
                    <fieldset className={styles.fieldset} key={venue.value}>
                      <legend className={styles.legend}>{venue.label}</legend>
                      <SelectRepeater
                        name="currencies"
                        requiresPrimary
                        initialValues={['GBP', 'USD']}
                        values={[
                          {
                            label: 'Great British Pound (£)',
                            value: 'GBP',
                          },
                          {
                            label: 'US Dollar ($)',
                            value: 'USD',
                          },
                          {
                            label: 'Euro (€)',
                            value: 'EUR',
                          },
                        ]}
                        renderFields={({ value }) => (
                          <>
                            <FormField
                              name={`currencies-${value}-tradable`}
                              label="Tradeable"
                            >
                              <Radio label="Yes" />
                              <Radio label="No" />
                            </FormField>
                            <FormField
                              name={`currencies-${value}-ltd-trade-entry-deadline`}
                              label="LTD trade entry deadline"
                            >
                              <TextInput type="time" />
                            </FormField>
                            <FormField
                              name={`currencies-${value}-ltd-matching-deadline`}
                              label="LTD matching deadline"
                            >
                              <TextInput type="time" />
                            </FormField>
                            <FormField
                              name={`currencies-${value}-ltd-matching-tick-size`}
                              label="Outright tick size"
                            >
                              <TextInput type="number" />
                            </FormField>
                            <FormField
                              name={`currencies-${value}-ltd-carry-tick-size`}
                              label="Carry tick size"
                            >
                              <TextInput type="number" />
                            </FormField>
                            <FormField
                              name={`currencies-${value}-price-codes`}
                              label="Price codes"
                            >
                              <Checkbox label="S" value="s" />
                              <Checkbox label="C" value="c" />
                              <Checkbox label="YS" value="ys" />
                            </FormField>
                          </>
                        )}
                      />
                    </fieldset>
                  ))}
                  <FormActions lastSaved={new Date('2019-08-15 13:24:00')}>
                    <Button variety="outline">Previous</Button>
                    <Button variety="outline">Save draft</Button>
                    <Button type="submit">Save and continue</Button>
                  </FormActions>
                </form>
              )}
            </Form>
          </Section>
        }
      />
    </Page>
  ));
