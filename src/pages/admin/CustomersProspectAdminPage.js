import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const CustomersProspectAdminPage = () => {
  return (
    <div>
      <Helmet title="Prospect Customers - Admin"
              meta={[
                { name: "description", content: "Prospect Customers - Admin" }
              ]}
      />
      <h1>CustomersProspectAdminPage</h1>
      <p>CustomersProspectAdminPage</p>
    </div>
  );
};
CustomersProspectAdminPage.propTypes = {};
CustomersProspectAdminPage.defaultProps = {};

export default withRouter(CustomersProspectAdminPage);
