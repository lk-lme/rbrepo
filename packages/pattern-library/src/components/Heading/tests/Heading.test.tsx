import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Heading from './../.';
import Section from './../../Section';

describe('<Heading />', () => {
  describe('level', () => {
    it('renders an h1 outside of a section', () => {
      const heading = shallow(<Heading>My heading</Heading>);
      const headingType = heading.type();

      expect(headingType).toBe('h1');
    });

    // it('increments heading level inside a <Section />', () => {
    //   const wrapper = shallow(
    //     <Section>
    //       <Heading>My heading</Heading>
    //     </Section>
    //   );
    //   const heading = wrapper.find(Heading).dive();
    //   const headingType = heading.type();

    //   expect(headingType).toBe('h2');
    // });
  });
});
