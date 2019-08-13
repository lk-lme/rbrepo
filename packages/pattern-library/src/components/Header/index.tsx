import React from 'react';
import cx from 'classnames';
import Form from './../Form';
import TextInput from './../TextInput';
import Button from './../Button';
import Link from './../Link';
import FormField from './../FormField';
import Notifications, { NotificationType } from './../Notifications';
import HeaderDropdown from './Dropdown/index';
import Icon from './../Icon';
import BellIcon from './../../svg/bell.svg';
import SearchIcon from './../../svg/search.svg';
import Logo from './../../svg/lme-logo-inverted.svg';
import styles from './header.scss';
import visuallyHidden from './../../styles/utilities/_visually-hidden.scss';

const Header: React.FunctionComponent<Props> = ({
  user,
  notifications = {
    items: [],
    hasUnread: false,
  },
}) => (
  <header className={styles.header}>
    <Link className={styles.brand}>
      <Logo className={styles.logo} />
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
    <HeaderDropdown
      label={(
        <div className={cx(styles['secondary-action'], notifications.hasUnread && styles['secondary-action--has-unread'])}>
          <Icon component={BellIcon} />
          <span>Notifications</span>
        </div>
      )}
    >
      {notifications.items && (
        <Notifications items={notifications.items} />
      )}
    </HeaderDropdown>
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
  notifications?: {
    items: NotificationType[];
    hasUnread?: boolean;
  };
  user?: {
    id: string;
    name: string;
    avatar: string;
  };
}

export default Header;
