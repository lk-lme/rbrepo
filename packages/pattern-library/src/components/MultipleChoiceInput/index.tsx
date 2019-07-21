import React, { ChangeEventHandler } from 'react';
import styles from './multiple-choice-input.scss';

/**
 * An component for individual radio/checkbox inputs.
 */
const MultipleChoiceInput: React.FunctionComponent<Props> = ({
  label,
  type,
  value,
  name,
  checked = false,
  onChange,
}) => (
  <label className={styles.wrapper}>
    <input
      type={type}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <span className={styles.control} />
    <span className={styles.label}>{label}</span>
  </label>
);

export interface Props {
  /** The display label. */
  label: string;
  /** The input type. */
  type: 'radio'|'checkbox';
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

