import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ModelsProductAdminPage = () => {
  return (
    <div>
      <Helmet title="Product Model - Admin"
              meta={[
                { name: "description", content: "Product Model - Admin" }
              ]}
      />
      <h3>ModelsProductAdminPage</h3>
      <p>ModelsProductAdminPage</p>
    </div>
  );
};
ModelsProductAdminPage.propTypes = {};
ModelsProductAdminPage.defaultProps = {};

export default withRouter(ModelsProductAdminPage);
