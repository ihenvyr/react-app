import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const SalesBestsellersAdminPage = () => {
  return (
    <div>
      <Helmet title="Bestsellers - Admin"
              meta={[
                { name: "description", content: "Bestsellers - Admin" }
              ]}
      />
      <h1>SalesBestsellersAdminPage</h1>
      <p>SalesBestsellersAdminPage</p>
    </div>
  );
};
SalesBestsellersAdminPage.propTypes = {};
SalesBestsellersAdminPage.defaultProps = {};

export default withRouter(SalesBestsellersAdminPage);
