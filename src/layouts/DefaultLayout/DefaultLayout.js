import React from 'react';
import styles from './DefaultLayout.scss';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main} role="main">{props.children}</main>
      <Footer />
    </div>
  );
};
DefaultLayout.propTypes = { children: React.PropTypes.element };
DefaultLayout.defaultProps = {};

export default DefaultLayout;
