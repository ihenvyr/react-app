import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ModelsUserAdminPage = () => {
  return (
    <div>
      <Helmet title="User - Admin"
              meta={[
                { name: "description", content: "User - Admin" }
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
