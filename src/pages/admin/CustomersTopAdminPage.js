import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const CustomersTopAdminPage = () => {
  return (
    <div>
      <Helmet title="Top Customers - Admin"
              meta={[
                { name: "description", content: "Top Customers - Admin" }
              ]}
      />
      <h1>CustomersTopAdminPage</h1>
      <p>CustomersTopAdminPage</p>
    </div>
  );
};
CustomersTopAdminPage.propTypes = {};
CustomersTopAdminPage.defaultProps = {};

export default withRouter(CustomersTopAdminPage);
