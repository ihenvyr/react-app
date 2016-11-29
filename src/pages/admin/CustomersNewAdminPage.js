import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const CustomersNewAdminPage = () => {
  return (
    <div>
      <Helmet title="New Customers - Admin"
              meta={[
                { name: "description", content: "New Customers - Admin" }
              ]}
      />
      <h1>CustomersNewAdminPage</h1>
      <p>CustomersNewAdminPage</p>
    </div>
  );
};
CustomersNewAdminPage.propTypes = {};
CustomersNewAdminPage.defaultProps = {};

export default withRouter(CustomersNewAdminPage);
