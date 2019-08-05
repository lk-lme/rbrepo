import React from 'react';
import cx from 'classnames';
import Form from './../Form';
import TextInput from './../TextInput';
import Button from './../Button';
import Link from './../Link';
import FormField from './../FormField';
import Icon from './../Icon';
import SearchIcon from './../../svg/search.svg';
import styles from './header.scss';
import visuallyHidden from './../../styles/utilities/_visually-hidden.scss';

const Header: React.FunctionComponent<Props> = ({
  user,
}) => (
  <header className={styles.header}>
    <Link className={styles.brand}>
      <img src="https://via.placeholder.com/88x42" alt="" />
      <span className={visuallyHidden['visually-hidden']}>
        LME CRD
      </span>
    </Link>
    <Form
      initialValues={{ globalsearch: '' }}
      validate={() => {}}
      onSubmit={(results) => console.log(results)}
    >
      {({ submitForm, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.search}>
          <FormField
            name="globalsearch"
            label="Global search"
            hideLabel
            className={styles['search__field']}
          >
            <TextInput
              className={styles['search__input']} type="search"
              placeholder="Search for contracts, members, etc."
            />
            <Button onClick={submitForm} className={styles['search__btn']}>
              <Icon component={SearchIcon} className={styles['search__icon']} />
              <span className={visuallyHidden['visually-hidden']}>
                Search
              </span>
            </Button>
          </FormField>
        </form>
      )}
    </Form>
    {user && (
      <Link className={styles.profile}>
        <img className={styles['profile__image']} src={user.avatar} alt="" />
        <span className={styles['profile__name']}>
          {user.name}
        </span>
      </Link>
    )}
  </header>
);

interface Props {
  user?: {
    id: string;
    name: string;
    avatar: string;
  };
}

export default Header;
