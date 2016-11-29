import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const CustomersAllAdminPage = () => {
  return (
    <div>
      <Helmet title="All Customers - Admin"
              meta={[
                { name: "description", content: "All Customers - Admin" }
              ]}
      />
      <h1>CustomersAllAdminPage</h1>
      <p>CustomersAllAdminPage</p>
    </div>
  );
};
CustomersAllAdminPage.propTypes = {};
CustomersAllAdminPage.defaultProps = {};

export default withRouter(CustomersAllAdminPage);
