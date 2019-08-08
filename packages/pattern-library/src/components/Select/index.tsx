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
import Button from './../Button';
import styles from './select.scss';
import { request } from 'https';

export const Select: React.FunctionComponent<Props> = ({
  id,
  items,
  placeholder,
  onChange,
}) => {
  const textInput = useRef<HTMLInputElement>();

  return (
    <Downshift
      id={id}
      onChange={onChange}
      itemToString={item => (item ? item.label : '')}
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
        selectItem,
        setHighlightedIndex,
      }) => (
        <div
          className={cx(styles.wrapper, isOpen && styles['wrapper--is-open'])}
        >
          <div className={styles.control}>
            <TextInput
              {...getInputProps({
                id,
                ref: textInput,
                placeholder,
                className: styles['control__input'],
                onFocus() {
                  openMenu();
                  if (inputValue && textInput.current) {
                    textInput.current.setSelectionRange(0, inputValue.length);
                  }
                },
                onKeyDown(e: KeyboardEvent) {
                  if (keycode(e.keyCode) === 'enter' && !inputValue) {
                    e.preventDefault();
                    clearSelection();
                  }
                },
              })}
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

type Props = Pick<DownshiftProps<any>, 'onChange'> & {
  id?: string;
  placeholder?: string;
  items: {
    value: string;
    label: string;
  }[];
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
