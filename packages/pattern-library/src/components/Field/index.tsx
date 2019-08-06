import React, { ReactElement } from 'react';
import cx from 'classnames';
import styles from './field.scss';
import visuallyHidden from './../../styles/utilities/_visually-hidden.scss';

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hideLabel,
  hint,
  errors,
  isSet,
  className,
  children,
}) => {
  const Wrapper = isSet ? 'fieldset' : 'div';
  const Label = isSet ? 'legend' : 'label';
  const errorArr = Array.isArray(errors) ? errors : [errors];

  return (
    <Wrapper
      className={cx(styles.wrapper, className, {
        [styles['wrapper--has-error']]: errorArr.length,
      })}
    >
      {label && (
        <Label
          htmlFor={id}
          className={cx({
            [visuallyHidden['visually-hidden']]: hideLabel,
          })}
        >
          <span className={styles.label}>
            {label}
          </span>
          {hint && (
            <span className={styles.hint}>
              {hint}
            </span>
          )}
        </Label>
      )}
      {children}
      {errorArr.length !== 0 && (
        <span className={styles.errors}>
          {errorArr.length > 1 ? (
            <ul>
              {errorArr.map(err => (
                <li>{err}</li>
              ))}
            </ul>
          ) : errorArr[0]}
        </span>
      )}
    </Wrapper>
  );
};

FormField.defaultProps = {
  isSet: false,
  errors: [],
};

export interface Props {
  name: string;
  children: React.ReactNode;
  label?: string;
  hideLabel?: boolean;
  id?: string;
  className?: string;
  hint?: string|ReactElement;
  errors?: string|string[];
  isSet?: boolean;
}

export default FormField;
