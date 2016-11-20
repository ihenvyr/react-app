import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <p>
        <small>
          <a href="https://github.com/ihenvyr/react-app" target="_blank">React App</a>
          {' '}
          Powered by ReactJS
        </small>
      </p>
    </footer>
  );
};
Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
