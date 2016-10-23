import React from 'react';
import Helmet from 'react-helmet';
import PageNotFound from './PageNotFound';
import { withRouter } from 'react-router';

const PageNotFoundContainer = (props) => {
  return (
    <div>
      <Helmet title="Page not found"
              meta={[
                { name: "description", content: "Page not found" }
              ]}
      />
      <PageNotFound {...props} />
    </div>
  );
};

export default withRouter(PageNotFoundContainer);
