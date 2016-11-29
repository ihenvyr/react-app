import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const CustomersAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Customers - Admin"
              meta={[
                { name: "description", content: "Customers - Admin" }
              ]}
      />
      {
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui fluid vertical menu">
              <Link className="item" activeClassName="active" to="/admin/customers/top">Top</Link>
              <Link className="item" activeClassName="active" to="/admin/customers/new">New</Link>
              <Link className="item" activeClassName="active" to="/admin/customers/repeat">Repeat</Link>
            </div>
          </div>
          <div className="thirteen wide column">
            {
              props.children ||
              <div>
                <h1>CustomersAdminPage</h1>
                <p>CustomersAdminPage</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};
CustomersAdminPage.propTypes = {};
CustomersAdminPage.defaultProps = {};

export default withRouter(CustomersAdminPage);
