import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersShippedAdminPage = () => {
  return (
    <div>
      <Helmet title="Shipped Orders - Admin"
              meta={[
                { name: "description", content: "Shipped Orders - Admin" }
              ]}
      />
      <h1>OrdersShippedAdminPage</h1>
      <p>OrdersShippedAdminPage</p>
    </div>
  );
};
OrdersShippedAdminPage.propTypes = {};
OrdersShippedAdminPage.defaultProps = {};

export default withRouter(OrdersShippedAdminPage);
