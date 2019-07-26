import getFocusableElems from '.';

const interactiveElems = [
  '<a href="#"></a>',
  '<area href="#" />',
  '<input type="text" />',
  '<select><option>Option</option></select>',
  '<textarea>Textarea</textarea>',
  '<button>Button</button>',
  '<div tabindex="0">Test</div>',
];
const staticElems = [
  '<input type="text" disabled />',
  '<select disabled><option>Option</option></select>',
  '<textarea disabled>Textarea</textarea>',
  '<button disabled>Button</button>',
  '<div tabindex="-1">Test</div>',
  '<span>Test</span>',
];

function hasFocus(elem: {[x: string]: any}) {
 return typeof elem.focus !== 'undefined';
}

describe('getFocusableElems', () => {
  it('retrieves focusable elements', () => {
    const wrapper = document.createElement('div')
    // Can't use createRange because of JSDom.
    wrapper.innerHTML = [...interactiveElems, ...staticElems].join('');

    const focusableElems = getFocusableElems(wrapper);
    const allAreFocusable = focusableElems.every(hasFocus);

    expect(focusableElems).toHaveLength(interactiveElems.length);
    expect(allAreFocusable).toBe(true);
  });
});
