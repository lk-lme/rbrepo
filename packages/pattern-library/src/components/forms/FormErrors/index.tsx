import React from 'react';
import * as R from 'ramda';
import { compose, branch, renderNothing, mapProps } from 'recompose';
import { connect } from 'formik';
import Alert from 'Components/core/Alert';

const FormErrors: React.FunctionComponent<Props> = ({ errors }) => (
  <Alert title="An issue with your submission" type="warning">
    <ul>
      {errors.map(({ id, message }) => (
        <li key={id}>
          <a href={`#${id}`}>
            {message}
          </a>
        </li>
      ))}
    </ul>
  </Alert>
);

interface Props {
  errors: {
    id: string;
    message: string;
  }[];
}

export default compose(
  connect,
  branch(
    R.anyPass([
      R.pathSatisfies(R.equals(0), ['formik', 'submitCount']),
      R.pathSatisfies(R.isEmpty, ['formik', 'errors']),
    ]),
    renderNothing,
  ),
  mapProps(R.pipe(
    R.path(['formik', 'errors']),
    R.applySpec({
      errors: R.pipe(
        R.mapObjIndexed((val, key) => ({
          id: key,
          message: val,
        })),
        R.values,
      ),
    })
  )),
  // @ts-ignore
)(FormErrors);

