import React from 'react';
import { Link } from 'react-router';
import styles from './Signup.scss';

class Signup extends React.Component {
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
    console.log(this);
  };

  render() {
    return (
      <form action="/signup" method="post" onSubmit={this.onSubmit} className={`ui form ${styles.container}`}>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="" required />
        </div>
        <div className="field">
          <label>Repeat Password</label>
          <input type="password" name="password-repeat" placeholder="" required />
        </div>
        <button className="ui green button" type="submit">Sign up</button>
        {' '}
        &nbsp;
        |
        &nbsp;
        {' '}
        Already signed up?
        {' '}
        <Link to="/signin">Sign in</Link>
      </form>
    );
  }
}

export default Signup;
