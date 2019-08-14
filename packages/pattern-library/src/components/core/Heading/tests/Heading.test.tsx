import * as React from 'react';
import { render, queryByText } from '@testing-library/react';
import Heading from '../index';
import Section from '../../Section/index';

function getTagnameByText(container: HTMLElement, text: string) {
  const elem = queryByText(container, text) as HTMLElement;
  return elem.nodeName.toLowerCase();
}

describe('<Heading />', () => {
  describe('level', () => {
    it('renders an h1 outside of a <Section />', () => {
      const title = 'My heading';
      const { container } = render(<Heading>{title}</Heading>);
      const tagName = getTagnameByText(container, title);

      expect(tagName).toBe('h1');
    });

    it('increments the level inside a <Section />', () => {
      const secondTitle = 'My second heading';
      const thirdTitle = 'My third heading';
      const { container } = render(
        <Section>
          <Heading>{secondTitle}</Heading>
          <Section>
            <Heading>{thirdTitle}</Heading>
          </Section>
        </Section>
      );
      const secondTagName = getTagnameByText(container, secondTitle);
      const thirdTagName = getTagnameByText(container, thirdTitle);

      expect(secondTagName).toBe('h2');
      expect(thirdTagName).toBe('h3');
    });

    it('allows for overriding the tag', () => {
      const title = 'Heading title';
      const tagOverride = 4;
      const { container } = render(
        <Section>
          <Heading level={tagOverride}>{title}</Heading>
        </Section>
      );
      const tagName = getTagnameByText(container, title);

      expect(tagName).toBe(`h${tagOverride}`);
    });
  });
});
