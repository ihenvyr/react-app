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
      <h3>ReportsVisitorsAdminPage</h3>
      <p>ReportsVisitorsAdminPage</p>
    </div>
  );
};
ReportsVisitorsAdminPage.propTypes = {};
ReportsVisitorsAdminPage.defaultProps = {};

export default withRouter(ReportsVisitorsAdminPage);
