import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const SignupPage = () => {
  return (
    <div>
      <Helmet title="Sign up"
              meta={[
                { name: "description", content: "Sign up" }
              ]}
      />
      <h1>Sign Up</h1>

      <form className="ui form" style={{ width: 320 }}>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="password" placeholder="" required />
        </div>
        <div className="field">
          <label>Repeat Password</label>
          <input type="text" name="password-repeat" placeholder="" required />
        </div>
        <button className="ui green button" type="submit">Sign up</button>
      </form>
    </div>
  );
};
SignupPage.propTypes = {};
SignupPage.defaultProps = {};

export default withRouter(SignupPage);
