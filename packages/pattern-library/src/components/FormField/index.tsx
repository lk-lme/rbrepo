import React, { ReactElement } from 'react';
import styles from './form-field.scss';

const FormField: React.FunctionComponent<Props> = ({
  name,
  label,
  hint,
  errors,
  children,
}) => {
  const isSet = Array.isArray(children) && children.length > 1;
  const Wrapper = isSet ? 'fieldset' : 'div';
  const Label = isSet ? 'legend' : 'label';

  return (
    <Wrapper className={styles.wrapper}>
      <Label
        htmlFor={name}
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
      {errors && (
        <span className={styles.errors}>
          {errors.length > 1 ? (
            <ul>
              {errors.map(err => (
                <li>{err}</li>
              ))}
            </ul>
          ) : errors[0]}
        </span>
      )}
    </Wrapper>
  );
};

interface Props {
  name: string;
  label: string;
  hint?: string|ReactElement;
  errors?: string[];
}

export default FormField;
