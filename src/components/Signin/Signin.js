import React from 'react';
import { Link } from 'react-router';
import styles from './Signin.scss';

class Signin extends React.Component {
  static propTypes = {
    // React.PropTypes.array
    // React.PropTypes.bool
    // React.PropTypes.func
    // React.PropTypes.number
    // React.PropTypes.object
    // React.PropTypes.string
    // React.PropTypes.node // anything that can be rendered
    // React.PropTypes.element
    // React.PropTypes.instanceOf(MyClass)
    // React.PropTypes.oneOf(['Thing 1', 'Thing 2'])
    // React.PropTypes.oneOfType([
    //   React.PropTypes.bool,
    //   React.PropTypes.string
    // ])
    // React.PropTypes.arrayOf(React.PropTypes.string)
    // React.PropTypes.objectOf(React.PropTypes.string)
    // React.PropTypes.shape({
    //   age: React.PropTypes.number,
    //   name: React.PropTypes.string
    // })
    // React.PropTypes.any
  };
  static defaultProps = {};
  state = {};

  // componentWillMount() {}

  // componentWillUnmount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.userSignin({ email: email.value, password: password.value });
  };

  render() {
    return (
      <form action="/signin" method="post" onSubmit={this.onSubmit} className={`ui form ${styles.container}`}>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="" required />
        </div>
        <button className="ui green button" type="submit">Sign in</button>
        {' '}
        &nbsp;
        |
        &nbsp;
        {' '}
        No account yet?
        {' '}
        <Link to="/signup">Sign up</Link>
      </form>
    );
  }
}

export default Signin;
