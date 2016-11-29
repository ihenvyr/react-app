import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const OrdersNewAdminPage = () => {
  return (
    <div>
      <Helmet title="New Orders - Admin"
              meta={[
                { name: "description", content: "New Orders - Admin" }
              ]}
      />
      <h1>OrdersNewAdminPage</h1>
      <p>OrdersNewAdminPage</p>
    </div>
  );
};
OrdersNewAdminPage.propTypes = {};
OrdersNewAdminPage.defaultProps = {};

export default withRouter(OrdersNewAdminPage);
