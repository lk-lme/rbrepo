# useOnOutsideClick

Runs a callback when a click event is fired outside of the passed in ref.

Expects a React ref and a callback function.

## Example

```jsx
const MyComponent = () => {
  const myRef = React.useRef();
  useOnOutsideClick(myRef, () => console.log('Clicked outside'));

  return (
    <div ref={myRef}>
      A component.
    </div>
  );
};
```

Further example usage can be found in `<Popover />` stories.
