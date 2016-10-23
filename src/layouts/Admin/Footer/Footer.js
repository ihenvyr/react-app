import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <p><small>&copy; Copyright {(new Date()).getFullYear()} Henry Cruz</small></p>
    </footer>
  );
};
Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
