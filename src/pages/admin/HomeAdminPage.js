import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const HomeAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Home - Admin"
              meta={[
                { name: "description", content: "Home - Admin" }
              ]}
      />
      {
        props.children ||
        <div>
          <h3>HomeAdminPage</h3>
          <p>HomeAdminPage</p>
        </div>
      }
    </div>
  );
};
HomeAdminPage.propTypes = {};
HomeAdminPage.defaultProps = {};

export default withRouter(HomeAdminPage);
