import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './Header.scss';

const Header = () => {
  return (
    <header role="banner" className="Header">
      <nav role="navigation" className={styles.navigation}>
        <div className="ui secondary pointing menu">
          <IndexLink className="item" activeClassName="active" to="/">Home</IndexLink>
          <Link className="item" activeClassName="active" to="/demos">Demos</Link>
          <Link className="item" activeClassName="active" to="/blog">Blog</Link>
          <Link className="item" activeClassName="active" to="/about">About</Link>
          <div className="right menu">
            <Link className="item" activeClassName="active" to="/signup">Sign Up</Link>
            <Link className="item" activeClassName="active" to="/signin">Sign In</Link>
            <Link className="item" activeClassName="active" to="/signout">Sign Out</Link>
          </div>
        </div>

        {/*{
          isSignedIn ?
            null :
            <Link className="item" activeClassName="active" to="/signup">Sign Up</Link>
        }
        {
          isSignedIn ?
            null :
            <Link className="item" activeClassName="active" to="/signin">Sign In</Link>
        }
        {
          isSignedIn ?
            <Link className="item" activeClassName="active" to="/signout">Sign Out</Link> :
            null
        }*/}
      </nav>
    </header>
  );
};
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
