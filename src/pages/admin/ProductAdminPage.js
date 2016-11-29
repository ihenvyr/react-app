import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ProductAdminPage = () => {
  return (
    <div>
      <Helmet title="Product - Admin"
              meta={[
                { name: "description", content: "Product - Admin" }
              ]}
      />
      <h1>ProductAdminPage</h1>
      <p>ProductAdminPage</p>
    </div>
  );
};
ProductAdminPage.propTypes = {};
ProductAdminPage.defaultProps = {};

export default withRouter(ProductAdminPage);
