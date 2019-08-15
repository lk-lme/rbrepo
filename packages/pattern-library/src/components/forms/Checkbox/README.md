# Checkbox

A controlled input that renders a label next to a custom checkbox control.

Default export is wrapped with `<Form />` handlers, named export is dumb.

## Chip

Checkboxes can also take on a button-like appearance ('Chip') with the `chip` boolean attribute. Their behaviour remains the same.

## State and form behaviour

- When used as a solitary input, the value will be `true/false`.
- When multiple `<Checkbox />` elements are used with the same `name`, the value will be an array of their individual `value` attributes.
