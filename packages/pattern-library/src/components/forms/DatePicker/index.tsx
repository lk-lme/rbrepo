import React from 'react';
import * as R from 'ramda';
import { compose, withStateHandlers, mapProps, withHandlers } from 'recompose';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './style-overrides.scss';
import { SingleDatePicker as RDSingleDatePicker } from 'react-dates';
import withFormikField from 'HOC/withFormikField';

export const SingleDatePicker = compose(
  withFormikField(),
  withStateHandlers(
    () => ({ focused: false }),
    {
      setFocus: () => focused => ({ focused }),
    },
  ),
  // @ts-ignore
  withHandlers({
    setValue: ({ name, setFieldValue }) => setFieldValue.bind(null, name),
    onFocusChange: ({ setFocus }) => ({ focused }) => setFocus(focused),
  }),
  // @ts-ignore
  mapProps(R.applySpec({
    id: R.prop('name'),
    date: R.prop('value'),
    onDateChange: R.prop('setValue'),
    focused: R.prop('focused'),
    onFocusChange: R.prop('onFocusChange'),
  })),
  // @ts-ignore
)(RDSingleDatePicker);

