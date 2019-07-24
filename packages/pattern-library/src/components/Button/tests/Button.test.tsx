import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './../.';

describe('<Button />', () => {
  describe('url', () => {
    it('renders a link when present', () => {
      const mockUrl  = 'https://www.google.com/';

      const { container } = render(<Button url={mockUrl} />);
      const $elem = container.querySelector('a') as HTMLElement;
      const linkHref = $elem.getAttribute('href');

      expect(linkHref).toBe(mockUrl);
    });
  });
});
