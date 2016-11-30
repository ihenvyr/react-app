import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersAwaitingPaymentAdminPage = () => {
  return (
    <div>
      <Helmet title="Orders Awaiting Payments - Admin"
              meta={[
                { name: "description", content: "Orders Awaiting Payments - Admin" }
              ]}
      />
      <h1>OrdersAwaitingPaymentAdminPage</h1>
      <p>OrdersAwaitingPaymentAdminPage</p>
    </div>
  );
};
OrdersAwaitingPaymentAdminPage.propTypes = {};
OrdersAwaitingPaymentAdminPage.defaultProps = {};

export default withRouter(OrdersAwaitingPaymentAdminPage);
