# Field

Each form control element (e.g. `TextInput`) should be wrapped in a <FormField />` element. This adds a label/wrapper for hints and errors, as well as passes down context information to the controls themselves.

Form fields that contain multiple `<Checkbox />` or `<Radio />` components should use a `fieldset` and `legend` rather than a `div`. This is automatically taken care of by `<FormField />` counting the number of children that have the static property `isFormInput`.

## Known issues

- Hint text is not associated with the input (e.g. through an ARIA attribute).
