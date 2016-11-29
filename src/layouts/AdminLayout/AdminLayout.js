import React from 'react';
import styles from './AdminLayout.scss';
import Header from './Header';
import Footer from './Footer';

const AdminLayout = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main} role="main">{props.children}</main>
      <Footer />
    </div>
  );
};
AdminLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default AdminLayout;
