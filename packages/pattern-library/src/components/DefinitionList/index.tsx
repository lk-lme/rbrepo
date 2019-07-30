import React, { Fragment } from 'react';
import handleRenderProp, { RenderProp } from './../../utils/handleRenderProp';
import styles from './definition-list.scss';

const DefinitionList: React.FunctionComponent<Props> = (props) => {
  const { items } = props;

  return (
    <dl className={styles['definition-list']}>
      {items.map(({ id, title, description }) => (
        <Fragment key={id}>
          <dt className={styles['definition-list__title']}>{handleRenderProp(title, props)}</dt>
          <dd className={styles['definition-list__description']}>{handleRenderProp(description, props)}</dd>
        </Fragment>
      ))}
    </dl>
  );
};

interface Props {
  items: {
    id: string;
    title: RenderProp;
    description: RenderProp;
  }[];
}

export default DefinitionList;
