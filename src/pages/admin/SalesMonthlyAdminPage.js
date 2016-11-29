import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const SalesMonthlyAdminPage = () => {
  return (
    <div>
      <Helmet title="Monthly Sales - Admin"
              meta={[
                { name: "description", content: "Monthly Sales - Admin" }
              ]}
      />
      <h1>SalesMonthlyAdminPage</h1>
      <p>SalesMonthlyAdminPage</p>
    </div>
  );
};
SalesMonthlyAdminPage.propTypes = {};
SalesMonthlyAdminPage.defaultProps = {};

export default withRouter(SalesMonthlyAdminPage);
