import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Admin.scss';

const Admin = (props) => {
  return (
    <div>
      <Header />
      <main role="main">{props.children}</main>
      <Footer />
    </div>
  );
};
Admin.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Admin;
