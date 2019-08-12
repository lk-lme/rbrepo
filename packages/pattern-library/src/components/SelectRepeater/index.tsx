import React, { useState, ChangeEvent } from 'react';
import * as R from 'ramda';
import Form from '../Form/index';
import FormField from '../FormField';
import Radio from './../Radio';
import Select from '../Select';
import Button from '../Button';
import styles from './select-repeater.scss';

const SelectRepeater: React.FunctionComponent<Props> = ({
  name,
  values,
  initialValues = [],
  renderFields,
  requiresPrimary,
}) => {
  const initialFormValues = { selected: '' };
  const [selectedValues, setSelectedValues] = useState<string[]>(initialValues);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const allAreSelected = selectedValues.length !== values.length;
  const leftoverValues = R.differenceWith(
    ({ value }, selected) => value === selected,
    values,
    selectedValues,
  );

  function clearValues() {
    setSelectedValues([]);
  }

  function removeValue(selected: string) {
    setSelectedValues(R.reject(R.equals(selected))(selectedValues));
  }

  function addValue(selected: string) {
    setSelectedValues(
      R.pipe(
        R.append(selected),
        R.uniq,
      )(selectedValues),
    );
  }

  function handleInputChange(e: ChangeEvent) {
    setInputValue(e.target.value);
  }

  function onStateChange({ inputValue = '', selectedItem }) {
    setInputValue(inputValue);
    setSelectedItem(selectedItem);
  }

  return (
    <>
      <Form
        initialValues={initialFormValues}
        validate={() => { }}
        onSubmit={({ selected }, { resetForm }) => {
          if (!selected) return;
          addValue(selected);
          resetForm(initialFormValues);
          setInputValue('');
        }}
      >
        {({ setFieldValue, submitForm }) =>
          allAreSelected ? (
            <div>
              <FormField
                label="Add a currency"
                name="selected"
                className={styles.form}
              >
                <Select
                  inputValue={inputValue}
                  selectedItem={selectedItem}
                  handleInputChange={handleInputChange}
                  onStateChange={onStateChange}
                  placeholder="Select a currency"
                  items={leftoverValues}
                  className={styles['form__select']}
                />
                <Button type="button" variety="secondary" onClick={submitForm}>
                  Add currency
                </Button>
              </FormField>
            </div>
          ) : (
            <Button type="button" onClick={clearValues}>
              Reset currencies
            </Button>
          )
        }
      </Form>
      <div className={styles.items}>
        {selectedValues.map((selected: string) => {
          const selectedItem = R.find(R.propEq('value', selected))(values);

          if (!selectedItem) return;

          return (
            <fieldset key={selected} className={styles.item}>
              <div className={styles['item__header']}>
                <legend className={styles['item__label']}>
                  {selectedItem.label}
                </legend>
                {requiresPrimary && (
                  <FormField
                    name={`${name}-primary`}
                  >
                    <Radio
                      label="Primary"
                      value={selected}
                      className={styles['primary-toggle']}
                    />
                  </FormField>
                )}
                <Button
                  type="button"
                  size="sm"
                  className={styles['item__delete-btn']}
                  onClick={() => removeValue(selected)}
                >
                  Delete
                </Button>
              </div>
              {renderFields(selectedItem)}
            </fieldset>
          );
        })}
      </div>
    </>
  );
};

type Value = {
  value: string;
  label: string;
}

interface Props {
  name: string;
  values: Value[];
  initialValues?: string[];
  requiresPrimary?: boolean;
  renderFields(item: Value): React.ReactElement;
}

export default SelectRepeater;
