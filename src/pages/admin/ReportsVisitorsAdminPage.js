import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ReportsVisitorsAdminPage = () => {
  return (
    <div>
      <Helmet title="Visitors Report - Admin"
              meta={[
                { name: "description", content: "Visitors Report - Admin" }
              ]}
      />
      <h1>ReportsVisitorsAdminPage</h1>
      <p>ReportsVisitorsAdminPage</p>
    </div>
  );
};
ReportsVisitorsAdminPage.propTypes = {};
ReportsVisitorsAdminPage.defaultProps = {};

export default withRouter(ReportsVisitorsAdminPage);
