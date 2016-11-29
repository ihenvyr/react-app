import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const SalesWeeklyAdminPage = () => {
  return (
    <div>
      <Helmet title="Weekly Sales - Admin"
              meta={[
                { name: "description", content: "Weekly Sales - Admin" }
              ]}
      />
      <h1>SalesWeeklyAdminPage</h1>
      <p>SalesWeeklyAdminPage</p>
    </div>
  );
};
SalesWeeklyAdminPage.propTypes = {};
SalesWeeklyAdminPage.defaultProps = {};

export default withRouter(SalesWeeklyAdminPage);
