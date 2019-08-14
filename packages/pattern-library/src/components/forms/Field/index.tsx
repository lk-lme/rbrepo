import React, { ReactElement } from 'react';
import cx from 'classnames';
import visuallyHidden from 'Styles/utilities/_visually-hidden.scss';
import styles from './field.scss';

const Field: React.FunctionComponent<Props> = ({
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
      {(label || hint) && (
        <div className={styles.header}>
          {label && (
            <Label
              id={`${id}-label`}
              htmlFor={!isSet ? id : null}
              className={cx(styles.label, {
                [visuallyHidden['visually-hidden']]: hideLabel,
              })}
            >
              {label}
            </Label>
          )}
          {hint && (
            <div id={`${name}-description`} className={styles.hint}>
              {hint}
            </div>
          )}
        </div>
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
          ) : (
            errorArr[0]
          )}
        </span>
      )}
    </Wrapper>
  );
};

Field.defaultProps = {
  isSet: false,
  errors: [],
};

export interface Props {
  name: string;
  children: React.ReactNode;
  label?: string;
  hideLabel?: boolean;
  id?: string;
  className?: string
  hint?: string|ReactElement;
  errors?: string|string[];
  isSet?: boolean;
}

export default Field;
