import React, { ReactElement } from 'react';
import styles from './field.scss';

const FormField: React.FunctionComponent<Props> = ({
  name,
  id = name,
  label,
  hint,
  errors = [],
  children,
}) => {
  const isSet = Array.isArray(children) && children.length > 1;
  const Wrapper = isSet ? 'fieldset' : 'div';
  const Label = isSet ? 'legend' : 'label';
  const errorArr = Array.isArray(errors) ? errors : [errors];

  return (
    <Wrapper className={styles.wrapper}>
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

export interface Props {
  name: string;
  label: string;
  id?: string;
  hint?: string|ReactElement;
  errors?: string|string[];
}

export default FormField;
