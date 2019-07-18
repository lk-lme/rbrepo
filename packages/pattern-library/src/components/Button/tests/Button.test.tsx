import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './../.';

describe('<Button />', () => {
  describe('url', () => {
    it('renders a link when present', () => {
      const mockUrl  = 'https://www.google.com/';

      const button = shallow(<Button url={mockUrl} />);
      const linkHref = button.find('a').prop('href');

      expect(linkHref).toBe(mockUrl);
    });
  });
});
