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
      <h3>OrdersCompletedAdminPage</h3>
      <p>OrdersCompletedAdminPage</p>
    </div>
  );
};
OrdersCompletedAdminPage.propTypes = {};
OrdersCompletedAdminPage.defaultProps = {};

export default withRouter(OrdersCompletedAdminPage);
