import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const CustomersRepeatAdminPage = () => {
  return (
    <div>
      <Helmet title="Repeat Customers - Admin"
              meta={[
                { name: "description", content: "Repeat Customers - Admin" }
              ]}
      />
      <h3>CustomersRepeatAdminPage</h3>
      <p>CustomersRepeatAdminPage</p>
    </div>
  );
};
CustomersRepeatAdminPage.propTypes = {};
CustomersRepeatAdminPage.defaultProps = {};

export default withRouter(CustomersRepeatAdminPage);
