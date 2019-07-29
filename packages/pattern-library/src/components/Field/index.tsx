import React, { ReactElement } from 'react';
import styles from './field.scss';

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hint,
  errors = [],
  children,
  isSet,
}) => {
  const Wrapper = isSet ? 'fieldset' : 'div';
  const Label = isSet ? 'legend' : 'label';
  const errorArr = Array.isArray(errors) ? errors : [errors];

  return (
    <Wrapper className={styles.wrapper}>
      {label && (
        <Label
          htmlFor={id}
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
};

export interface Props {
  name: string;
  children: React.ReactNode;
  label?: string;
  id?: string;
  hint?: string|ReactElement;
  errors?: string|string[];
  isSet?: boolean;
}

export default FormField;
