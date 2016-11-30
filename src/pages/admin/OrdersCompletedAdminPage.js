import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersCompletedAdminPage = () => {
  return (
    <div>
      <Helmet title="Completed Orders - Admin"
              meta={[
                { name: "description", content: "Completed Orders - Admin" }
              ]}
      />
      <h1>OrdersCompletedAdminPage</h1>
      <p>OrdersCompletedAdminPage</p>
    </div>
  );
};
OrdersCompletedAdminPage.propTypes = {};
OrdersCompletedAdminPage.defaultProps = {};

export default withRouter(OrdersCompletedAdminPage);
