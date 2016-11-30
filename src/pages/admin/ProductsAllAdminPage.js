import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ProductsAllAdminPage = () => {
  return (
    <div>
      <Helmet title="All Products - Admin"
              meta={[
                { name: "description", content: "All Products - Admin" }
              ]}
      />
      <h3>ProductsAllAdminPage</h3>
      <p>ProductsAllAdminPage</p>
    </div>
  );
};
ProductsAllAdminPage.propTypes = {};
ProductsAllAdminPage.defaultProps = {};

export default withRouter(ProductsAllAdminPage);
