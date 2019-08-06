import { compose, renameProp, mapProps, withProps, setStatic } from 'recompose';
import withFormikField from '../../hoc/withFormikField';
import MultipleChoiceInput from './../MultipleChoiceInput';

export const Checkbox = withProps({
  type: 'checkbox',
})(MultipleChoiceInput);

export default compose(
  setStatic('isFormInput', true),
  renameProp('value', 'inputValue'),
  withFormikField(),
  // @ts-ignore
  mapProps(({ name, setFieldValue, inputValue, value, ...props }) => ({
    ...props,
    name,
    onChange(e: React.ChangeEvent) {
      const target = e.target as HTMLInputElement;

      if (inputValue) {
        setFieldValue(
          name,
          target.checked
            ? [...new Set([...(value || []), inputValue])]
            : [...value].filter(x => x !== inputValue),
        );
      } else {
        setFieldValue(name, target.checked);
      }
    },
    value: inputValue,
    checked:
      value === 'undefined'
        ? false
        : Array.isArray(value)
        ? value.includes(inputValue)
        : Boolean(value),
  })),
  // @ts-ignore
)(Checkbox);
