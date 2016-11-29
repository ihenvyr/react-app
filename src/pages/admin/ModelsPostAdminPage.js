import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ModelsPostAdminPage = () => {
  return (
    <div>
      <Helmet title="Post - Admin"
              meta={[
                { name: "description", content: "Post - Admin" }
              ]}
      />
      <h1>ModelsPostAdminPage</h1>
      <p>ModelsPostAdminPage</p>
    </div>
  );
};
ModelsPostAdminPage.propTypes = {};
ModelsPostAdminPage.defaultProps = {};

export default withRouter(ModelsPostAdminPage);
