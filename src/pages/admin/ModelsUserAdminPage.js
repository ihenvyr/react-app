import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ModelsUserAdminPage = () => {
  return (
    <div>
      <Helmet title="User Model - Admin"
              meta={[
                { name: "description", content: "User Model - Admin" }
              ]}
      />
      <h1>ModelsUserAdminPage</h1>
      <p>ModelsUserAdminPage</p>
    </div>
  );
};
ModelsUserAdminPage.propTypes = {};
ModelsUserAdminPage.defaultProps = {};

export default withRouter(ModelsUserAdminPage);
