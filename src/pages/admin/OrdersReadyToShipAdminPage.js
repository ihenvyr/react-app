import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersReadyToShipAdminPage = () => {
  return (
    <div>
      <Helmet title="Orders that are Ready to Ship - Admin"
              meta={[
                { name: "description", content: "Orders that are Ready to Ship - Admin" }
              ]}
      />
      <h1>OrdersReadyToShipAdminPage</h1>
      <p>OrdersReadyToShipAdminPage</p>
    </div>
  );
};
OrdersReadyToShipAdminPage.propTypes = {};
OrdersReadyToShipAdminPage.defaultProps = {};

export default withRouter(OrdersReadyToShipAdminPage);
