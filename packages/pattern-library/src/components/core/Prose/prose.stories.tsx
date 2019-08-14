import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Heading from 'Components/core/Heading';
import Section from 'Components/core/Section';
import Prose from '.';

storiesOf('Core/Typography/Prose', module)
  .addDecorator(PaddingDecorator())
  .add('Basic', () => (
    <Prose>
      <Heading>HTML Ipsum</Heading>
      <Section>
        <p>
          <strong>Pellentesque habitant morbi tristique</strong> senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
          sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>{' '}
          Mauris placerat eleifend leo. Quisque sit amet est et sapien
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,{' '}
          <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
          elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
          tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis
          pulvinar facilisis. Ut felis.
        </p>

        <Heading>HTML Ipsum</Heading>

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
            molestie gravida. Curabitur massa. Donec eleifend, libero at
            sagittis mollis, tellus est malesuada tellus, at luctus turpis elit
            sit amet quam. Vivamus pretium ornare est.
          </p>
        </blockquote>

        <Section>
          <Heading asLevel={2}>HTML Ipsum</Heading>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
        </Section>
      </Section>
    </Prose>
  ));
