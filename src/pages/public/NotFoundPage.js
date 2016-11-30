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
      <h2>Page not found :(</h2>
      <p>We couldn't load the page you requested..</p>
    </div>
  );
};
NotFoundPage.propTypes = {};
NotFoundPage.defaultProps = {};

export default withRouter(NotFoundPage);
