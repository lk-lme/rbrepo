import React, { memo, forwardRef } from 'react';
import * as R from 'ramda';
import { compose, mapProps } from 'recompose';
import cx from 'classnames';
import withFormikField from '../../hoc/withFormikField';
import styles from './../TextInput/text-input.scss';

export const TextArea: React.FunctionComponent<Props> = forwardRef<
  HTMLTextAreaElement,
  Props
>(
  (
    {
      id,
      name,
      value,
      placeholder,
      onChange,
      onBlur,
      testId,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={cx(styles.input, className)}
        data-testid={testId}
        ref={ref}
        {...props}
      />
    );
  },
);

TextArea.defaultProps = {
  value: '',
};

interface Props {
  /** The form field name that data will be stored under. */
  name?: string;
  /** The controlled string value */
  value?: string;
  placeholder?: string;
  id?: string;
  testId?: string;
  className?: string;
  /** The callback function run when the input is checked/un-checked. */
  onChange?(e: React.ChangeEvent): void;
  onBlur?(e: React.FocusEvent): void;
}

export default compose(
  withFormikField(),
  mapProps(R.omit(['setFieldValue'])),
)(memo(TextArea));
