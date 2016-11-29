import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ProductsSoldoutAdminPage = () => {
  return (
    <div>
      <Helmet title="Sold Out Products - Admin"
              meta={[
                { name: "description", content: "Sold Out Products - Admin" }
              ]}
      />
      <h1>ProductsSoldoutAdminPage</h1>
      <p>ProductsSoldoutAdminPage</p>
    </div>
  );
};
ProductsSoldoutAdminPage.propTypes = {};
ProductsSoldoutAdminPage.defaultProps = {};

export default withRouter(ProductsSoldoutAdminPage);
