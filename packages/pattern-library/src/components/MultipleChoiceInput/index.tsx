import React, { ChangeEventHandler } from 'react';
import cx from 'classnames';
import styles from './multiple-choice-input.scss';
import visuallyHidden from './../../styles/utilities/_visually-hidden.scss';
import Icon from './../Icon';
import CheckIconSmall from './../../svg/tick-small.svg';

/**
 * An component for individual radio/checkbox inputs.
 */
const MultipleChoiceInput: React.FunctionComponent<Props> = ({
  label,
  type,
  value,
  name,
  checked = false,
  chip,
  onChange,
}) => {
  return (
  <label
    className={cx(styles.wrapper, {
      [styles['wrapper--chip']]: chip,
      [styles['wrapper--radio']]: type === 'radio',
    })}
  >
    <input
      type={type}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={cx(styles.input, visuallyHidden['visually-hidden'])}
    />
    {!chip && (
      <span className={styles.control} aria-hidden="true">
        {type === 'checkbox' && (
          <Icon className={styles.icon} component={CheckIconSmall} />
        )}
      </span>
    )}
    <span className={styles.label}>{label}</span>
  </label>
 );
};

export interface Props {
  /** The display label. */
  label: string;
  /** The input type. */
  type: 'radio'|'checkbox';
  chip?: boolean;
  /** The form field name that data will be stored under. */
  name?: string;
  /** If it's not a single-input boolean, this will be the submission value. */
  value?: string;
  /** If the input has been selected. */
  checked?: boolean;
  /** The callback function run when the input is checked/un-checked. */
  onChange?: ChangeEventHandler;
}

export default MultipleChoiceInput;
