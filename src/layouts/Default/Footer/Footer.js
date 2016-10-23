import React from 'react';
import './Footer.scss';

const DefaultFooter = () => {
  return (
    <footer role="contentinfo">
      <p><small>&copy; Copyright {(new Date()).getFullYear()} Henry Cruz</small></p>
    </footer>
  );
};
DefaultFooter.propTypes = {};
DefaultFooter.defaultProps = {};

export default DefaultFooter;
