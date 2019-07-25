# usePortal

Hook to create a [React Portal](https://reactjs.org/docs/portals.html). Creates a wrapper element to allow multiple components to be mounted to a single portal.

If a wrapper with the passed in ID doesn't already exist, it will automatically create one.

## Example

```jsx
// <Portal id="my-demo-portal">Demo</Portal>
const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};
```
