import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const ProductsAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Products - Admin"
              meta={[
                { name: "description", content: "Products - Admin" }
              ]}
      />
      {
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui fluid vertical menu">
              <Link className="item" activeClassName="active" to="/admin/products/all">All</Link>
              <Link className="item" activeClassName="active" to="/admin/products/new">New</Link>
              <Link className="item" activeClassName="active" to="/admin/products/soldout">Sold Out</Link>
            </div>
          </div>
          <div className="thirteen wide column">
            {
              props.children ||
              <div>
                <h1>ProductsAdminPage</h1>
                <p>ProductsAdminPage</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};
ProductsAdminPage.propTypes = {};
ProductsAdminPage.defaultProps = {};

export default withRouter(ProductsAdminPage);
