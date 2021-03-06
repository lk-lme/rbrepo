import React, { memo, forwardRef } from 'react';
import * as R from 'ramda';
import { compose, mapProps } from 'recompose';
import cx from 'classnames';
import withFormikField from 'HOC/withFormikField';
import styles from './text-input.scss';

export const TextInput: React.FunctionComponent<Props> = forwardRef<
  HTMLInputElement,
  Props
>(
  (
    {
      id,
      type = 'text',
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
      <input
        id={id}
        type={type}
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

TextInput.defaultProps = {
  value: '',
};

interface Props {
  /** The form field name that data will be stored under. */
  name?: string;
  /** The plain-text based input options.  */
  type?: 'text' | 'email' | 'password' | 'tel' | 'search';
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
)(memo(TextInput));
