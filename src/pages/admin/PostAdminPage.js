import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const PostAdminPage = () => {
  return (
    <div>
      <Helmet title="Post - Admin"
              meta={[
                { name: "description", content: "Post - Admin" }
              ]}
      />
      <h1>PostAdminPage</h1>
      <p>PostAdminPage</p>
    </div>
  );
};
PostAdminPage.propTypes = {};
PostAdminPage.defaultProps = {};

export default withRouter(PostAdminPage);
