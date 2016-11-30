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
      <h3>ProductsSoldoutAdminPage</h3>
      <p>ProductsSoldoutAdminPage</p>
    </div>
  );
};
ProductsSoldoutAdminPage.propTypes = {};
ProductsSoldoutAdminPage.defaultProps = {};

export default withRouter(ProductsSoldoutAdminPage);
