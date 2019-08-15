import React from 'react';
import faker from 'faker';
import Case from 'case';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Section from 'Components/core/Section';
import Heading from '.';
import README from './README.md';

const levels = {
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
};

storiesOf('Core/Typography/Heading', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: README } })
  .add('Manual', () => (
    <Heading
      level={options(
        'Heading level',
        levels,
        1,
        {
          display: 'select'
        },
      )}
    >
      {text('Title', Case.capital(faker.lorem.words(3)))}
    </Heading>
  ))
  .add('Style override', () => (
    <Heading
      level={2}
      asLevel={options(
        'Visual level',
        levels,
        1,
        {
          display: 'select'
        },
      )}
    >
      {text('Title', Case.capital(faker.lorem.words(3)))}
    </Heading>
  ))
  .add('Automatic', () => (
    <>
      <Heading>This is a h1</Heading>
      <Section>
        <Heading>This is an h2</Heading>
        <Section>
          <Heading>This is an h3</Heading>
          <Section>
            <Heading>This is an h4</Heading>
            <Section>
              <Heading>This is an h5</Heading>
              <Section>
                <Heading>This is an h6</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  ));
