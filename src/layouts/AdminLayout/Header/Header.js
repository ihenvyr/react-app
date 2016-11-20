import React from 'react';
import { Link, IndexLink } from 'react-router';
import './Header.scss';

const Header = () => {
  return (
    <header role="banner" className="hide-on-print">
      <nav role="navigation" className="ui secondary pointing menu">
        <div className="item"><i className="large cubes icon" /></div>
        <IndexLink className="item" activeClassName="active" to="/admin">Home</IndexLink>
        <Link className="item" activeClassName="active" to="/admin/posts">Posts</Link>
        <Link className="item" activeClassName="active" to="/admin/users">Users</Link>

        <div className="right menu">
          <Link className="item" activeClassName="active" to="/admin/signout">Sign Out</Link>
        </div>
      </nav>
    </header>
  );
};
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
