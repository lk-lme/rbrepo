import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Section from 'Components/core/Section';
import Heading from '.';
import Readme from './README.md';

storiesOf('Core/Typography/Heading', module)
  .addDecorator(PaddingDecorator())
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
