# Popover

Places children in an absolutely positioned 'popover'.

The children are rendered inside a [Portal](https://reactjs.org/docs/portals.html), and positioned using [`Popper.js`](https://popper.js.org).

Expects a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to an 'anchor' element (likely the trigger) which it will position itself in relation to.

Example:

```jsx
const btnElRef = useRef<HTMLButtonElement>(null);

return (
	<>
		<Button ref={btnElRef}>Trigger</Button>
		<Popover anchor={btnElRef} isActive={true}>
		 <span>A popover child</span>
		</Popover>
	</>
);
```
