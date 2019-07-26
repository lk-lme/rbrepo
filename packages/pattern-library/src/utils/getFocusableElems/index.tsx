const interactiveSelectors = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  '[tabindex="0"]',
];

/**
 * Returns an array of child elements that are 'interactive',
 * i.e. focusable. This is useful for focus trapping etc.
 * 
 * @param parent The parent element to look within. 
 */
function getFocusableElems(parent: HTMLElement): HTMLElement[] {
  return Array.from(parent.querySelectorAll(interactiveSelectors.join(', ')));
}

export default getFocusableElems;
