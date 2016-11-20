import React from 'react';
import './Footer.scss';

const DefaultFooter = () => {
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
DefaultFooter.propTypes = {};
DefaultFooter.defaultProps = {};

export default DefaultFooter;
