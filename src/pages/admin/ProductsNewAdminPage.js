import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ProductsNewAdminPage = () => {
  return (
    <div>
      <Helmet title="New Products - Admin"
              meta={[
                { name: "description", content: "New Products - Admin" }
              ]}
      />
      <h1>ProductsNewAdminPage</h1>
      <p>ProductsNewAdminPage</p>
    </div>
  );
};
ProductsNewAdminPage.propTypes = {};
ProductsNewAdminPage.defaultProps = {};

export default withRouter(ProductsNewAdminPage);
