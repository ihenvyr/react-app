import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersAllAdminPage = () => {
  return (
    <div>
      <Helmet title="All Orders - Admin"
              meta={[
                { name: "description", content: "All Orders - Admin" }
              ]}
      />
      <h3>OrdersAllAdminPage</h3>
      <p>OrdersAllAdminPage</p>
    </div>
  );
};
OrdersAllAdminPage.propTypes = {};
OrdersAllAdminPage.defaultProps = {};

export default withRouter(OrdersAllAdminPage);
