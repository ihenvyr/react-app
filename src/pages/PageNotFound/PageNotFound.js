import React from 'react';
import styles from './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Page not found :(</h1>
      <p>We couldn't load the page you requested..</p>
    </div>
  );
};
PageNotFound.propTypes = {};
PageNotFound.defaultProps = {};

export default PageNotFound;
