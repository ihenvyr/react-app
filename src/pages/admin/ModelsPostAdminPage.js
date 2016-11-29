import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ModelsPostAdminPage = () => {
  return (
    <div>
      <Helmet title="Post Model - Admin"
              meta={[
                { name: "description", content: "Post Model - Admin" }
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
