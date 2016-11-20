import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <Helmet title="Page not found"
              meta={[
                { name: "description", content: "Page not found" }
              ]}
      />
      <h1>Page not found :(</h1>
      <p>We couldn't load the page you requested..</p>
    </div>
  );
};
NotFoundPage.propTypes = {};
NotFoundPage.defaultProps = {};

export default withRouter(NotFoundPage);
