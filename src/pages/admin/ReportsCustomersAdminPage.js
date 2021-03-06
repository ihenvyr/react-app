import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ReportsCustomersAdminPage = () => {
  return (
    <div>
      <Helmet title="Customers Report - Admin"
              meta={[
                { name: "description", content: "Customers Report - Admin" }
              ]}
      />
      <h3>ReportsCustomersAdminPage</h3>
      <p>ReportsCustomersAdminPage</p>
    </div>
  );
};
ReportsCustomersAdminPage.propTypes = {};
ReportsCustomersAdminPage.defaultProps = {};

export default withRouter(ReportsCustomersAdminPage);
