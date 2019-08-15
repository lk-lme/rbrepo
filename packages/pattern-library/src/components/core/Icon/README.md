# Icon

The `<Icon />` component adds an icon class to an inline SVG component:

```jsx
import Icon from 'Components/core/Icon';
import ChevronDownIcon from 'SVG/chevron-down.svg';

const MyApp = () => (
  <Icon component={ChevronDownIcon} />
);
```

SVGs themselves are automatically handled by [SVGR](https://github.com/smooth-code/svgr), so can be imported directly.

The current icon set is taken from [Polaris](https://polaris-icons.shopify.com), with icons added as and when they are needed.

## Size/Fill

You can customise the size/fill of an icon directly by setting the following CSS properties on the parent:

```css
--icon-size: 2rem;
--icon-fill: blue;
```