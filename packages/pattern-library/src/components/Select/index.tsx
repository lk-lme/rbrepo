import React, { useRef } from 'react';
import * as R from 'ramda';
import { compose, setStatic, withHandlers, mapProps } from 'recompose';
import cx from 'classnames';
import keycode from 'keycode';
import Downshift, { DownshiftProps } from 'downshift';
import withFormikField from './../../hoc/withFormikField';
import { TextInput } from './../TextInput';
import Icon from './../Icon';
import CaretDownIcon from './../../svg/caret-down.svg';
import CheckIconCircle from './../../svg/circle-tick.svg';
import styles from './select.scss';

export const Select: React.FunctionComponent<Props> = ({
  id,
  items,
  placeholder,
  onChange,
  inputValue,
  handleInputChange,
  onSelect,
  onStateChange,
  className,
}) => {
  const textInput = useRef<HTMLInputElement>();

  return (
    <Downshift
      id={id}
      onChange={onChange}
      onSelect={onSelect}
      itemToString={item => (item ? item.label : '')}
      inputValue={inputValue}
      onStateChange={onStateChange}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        openMenu,
        clearSelection,
      }) => (
        <div
          className={cx(styles.wrapper, isOpen && styles['wrapper--is-open'], className)}
        >
          <div className={styles.control}>
            <TextInput
              {...getInputProps({
                id,
                placeholder,
                className: styles['control__input'],
                onChange: handleInputChange,
              })}
              ref={textInput}
              onFocus={() => {
                openMenu();
                // Highlight the text in the box for easy deletion
                if (inputValue && textInput.current) {
                  textInput.current.setSelectionRange(0, inputValue.length);
                }
              }}
              onKeyDown={(e: KeyboardEvent) => {
                if (keycode(e.keyCode) === 'enter' && !inputValue) {
                  e.preventDefault();
                  clearSelection();
                }
              }}
            />
            <Icon
              aria-hidden="true"
              className={styles['control__icon']}
              component={CaretDownIcon}
            />
          </div>
          {isOpen && (
            <div className={styles.dropdown}>
              <ul className={styles.results} {...getMenuProps()}>
                {items
                  .filter(
                    item =>
                      !inputValue ||
                      item.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()),
                  )
                  .map((item, index) => {
                    const isCurrent = highlightedIndex === index;
                    const isSelected = selectedItem === item;
                    return (
                      <li
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          className: cx(
                            styles['result__item'],
                            isCurrent && styles['result__item--is-current'],
                            isSelected && styles['result__item--is-selected'],
                          ),
                        })}
                      >
                        <span className={styles['result__label']}>
                          {item.label}
                        </span>
                        {isSelected && (
                          <Icon
                            className={styles['result__icon']}
                            component={CheckIconCircle}
                          />
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      )}
    </Downshift>
  );
};

type Props = Pick<DownshiftProps<any>, 'onChange'|'onStateChange'|'onSelect'|'inputValue'> & {
  items: {
    value: string;
    label: string;
  }[];
  id?: string;
  placeholder?: string;
  className?: string;
  handleInputChange?(e: Event): void;
};

export default compose(
  setStatic('isFormInput', true),
  withFormikField(),
  withHandlers({
    onChange: ({ name, setFieldValue }) => result => {
      setFieldValue(name, result ? result.value : undefined);
    },
  }),
  mapProps(R.omit(['setFieldValue'])),
)(Select);
