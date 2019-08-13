import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';
import Section from './../Section';
import Readme from './README.md';

storiesOf('Typography / Heading', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('Manual', () => (
    <Heading level={2}>
      This is an h2
    </Heading>
  ))
  .add('Style override', () => (
    <Heading level={2} asLevel={1}>
      This is an h2 styled as an h1
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
