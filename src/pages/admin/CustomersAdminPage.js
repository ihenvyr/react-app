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
              <Link className="item" activeClassName="active" to="/admin/customers/all">All Customers</Link>
              <Link className="item" activeClassName="active" to="/admin/customers/repeat">Repeat Customers</Link>
              <Link className="item" activeClassName="active" to="/admin/customers/prospect">Prospect</Link>
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
