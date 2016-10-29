import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const SigninPage = () => {
  return (
    <div>
      <Helmet title="Sign in"
              meta={[
                { name: "description", content: "Sign in" }
              ]}
      />
      <h1>Sign In</h1>

      <form className="ui form" style={{ width: 320 }}>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="password" placeholder="" required />
        </div>
        <button className="ui green button" type="submit">Sign in</button>
      </form>
    </div>
  );
};
SigninPage.propTypes = {};
SigninPage.defaultProps = {};

export default withRouter(SigninPage);
