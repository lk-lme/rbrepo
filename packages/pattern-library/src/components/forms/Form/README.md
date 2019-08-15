# Form

The `<Form />` component is the top-level component when creating a form. Since it uses the [render-prop pattern](https://reactpatterns.com/#render-prop), the child must be a render function:

```jsx
<Form {...props}>
	{() => (<form>...</form>)}
</Form>
```

This render function receives the same data as the [original `<Formik />` wrapper](https://jaredpalmer.com/formik/docs/api/formik). It does not render an HTML `<form />` element itself.

## Form Fields (`<FormField />`)

Each form control element (e.g. `TextInput`) should be wrapped in a <FormField />` element. This adds a label/wrapper for hints and errors, as well as passes down context information to the controls themselves.

Form fields that contain multiple `<Checkbox />` or `<Radio />` components should use a `fieldset` and `legend` rather than a `div`. This is automatically taken care of by `<FormField />` counting the number of children that have the static property `isFormInput`.

## Form inputs/controls

Form controls, such as `<TextInput />` are by default exported to be `<Form />` aware. This means that including one inside a `<FormField />` will automatically update the relevant form state.

If you would like to use a control as a 'dumb' component that isn't context-aware, you can export it as a named export:

```jsx
// Form-aware
import TextInput from 'Components/forms/TextInput';
// Dumb/context-less
import { TextInput } from 'Components/forms/TextInput';
```

## Validation

Form validation is handled by [Formik](https://jaredpalmer.com/formik/docs/guides/validation). [Yup](https://github.com/jquense/yup) is recommended for creating validation schemas.

## Conditional fields

Progressively disclosing fields based on the currently entered values is possible by simply changing the rendering logic to mount/un-mount the relevant fields.

One of the properties passed within the render-prop is the `values` object, which contains all the currently entered form values:

```jsx
<Form initialValues={{ isTrue: false }>
	{({ values }) => (
	  <form>
	    {values.isTrue ? 'Is true' : 'Is false'}
	  </form>
  )}
</Form>
```

Since this updates in real-time as data is entered, it's trivial to add 'conditional' fields by simply wrapping them in a condition, such as above.

In order to persist entered data in the event of a field becoming invisible (then visible again), the data is not removed from the `values` object. 

This means that if the user enters data for a conditional field, then the field becomes hidden, the data is still stored (and would in theory be submitted). In order to mitigate this, the `validation` and `onSubmit` callbacks are wrapped inside `<Form />` to exclude un-mounted fields. 

Consequently, if you want fields to be included in submission, they *must* be mounted, even if they are visually hidden.
