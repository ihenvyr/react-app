import React from 'react';
import styles from './Default.scss';
import Header from './Header';
import Footer from './Footer';

const Default = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main} role="main">{props.children}</main>
      <Footer />
    </div>
  );
};
Default.propTypes = { children: React.PropTypes.element };
Default.defaultProps = {};

export default Default;
