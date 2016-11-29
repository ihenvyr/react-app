import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const SalesDailyAdminPage = () => {
  return (
    <div>
      <Helmet title="Daily Sales - Admin"
              meta={[
                { name: "description", content: "Daily Sales - Admin" }
              ]}
      />
      <h1>SalesDailyAdminPage</h1>
      <p>SalesDailyAdminPage</p>
    </div>
  );
};
SalesDailyAdminPage.propTypes = {};
SalesDailyAdminPage.defaultProps = {};

export default withRouter(SalesDailyAdminPage);
