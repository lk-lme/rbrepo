import { compose, mapProps, renameProp, withProps, setStatic } from 'recompose';
import MultipleChoiceInput from 'Components/forms//MultipleChoiceInput';
import withFormikField from 'HOC/withFormikField';

const Radio = withProps({
  type: 'radio',
})(MultipleChoiceInput);

export default compose(
  setStatic('isFormInput', true),
  renameProp('value', 'inputValue'),
  withFormikField(),
  // @ts-ignore
  mapProps(({ inputValue, value, ...props }) => ({
    value: inputValue,
    checked: value === inputValue,
    ...props,
  })),
// @ts-ignore
)(Radio);
