import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersPaidAdminPage = () => {
  return (
    <div>
      <Helmet title="Paid Orders - Admin"
              meta={[
                { name: "description", content: "Paid Orders - Admin" }
              ]}
      />
      <h1>OrdersPaidAdminPage</h1>
      <p>OrdersPaidAdminPage</p>
    </div>
  );
};
OrdersPaidAdminPage.propTypes = {};
OrdersPaidAdminPage.defaultProps = {};

export default withRouter(OrdersPaidAdminPage);
