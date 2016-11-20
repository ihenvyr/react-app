import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './AdminLayout.scss';

const AdminLayout = (props) => {
  return (
    <div>
      <Header />
      <main role="main">{props.children}</main>
      <Footer />
    </div>
  );
};
AdminLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default AdminLayout;
