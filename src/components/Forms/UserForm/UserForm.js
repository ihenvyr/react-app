import React from 'react';
import classes from './UserForm.scss';

class UserForm extends React.Component {
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
  static defaultProps = {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    address: '',
    contact_number: '',
    facebook: '',
    password: '',
  };
  state = {};

  // componentWillMount() {}

  // componentWillUnmount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      first_name, last_name, email, role,
      address, contact_number, facebook,
      password, password_repeat,
    } = event.target;

    console.log(
      first_name, last_name, email, role,
      address, contact_number, facebook,
      password, password_repeat,
    );
  };

  render() {
    const {
      first_name, last_name, email, role,
      address, contact_number, facebook,
      password
    } = this.props;

    return (
      <form className="ui form" onSubmit={this.handleFormSubmit}>
        <div className="four fields">
          <div className="field">
            <label htmlFor="first_name">First Name</label>
            <input defaultValue={first_name} type="text" name="first_name" id="first_name"/>
          </div>
          <div className="field">
            <label htmlFor="last_name">Last Name</label>
            <input defaultValue={last_name} type="text" name="last_name" id="last_name"/>
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input defaultValue={email} type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <select defaultValue={role} name="role" id="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="fields">
          <div className="eight wide field">
            <label htmlFor="address">Address</label>
            <input defaultValue={address} type="text" name="address" id="address"/>
          </div>
          <div className="four wide field">
            <label htmlFor="contact_number">Contact Number</label>
            <input defaultValue={contact_number} type="text" name="contact_number" id="contact_number"/>
          </div>
          <div className="four wide field">
            <label htmlFor="facebook">Facebook</label>
            <input defaultValue={facebook} type="text" name="facebook" id="facebook"/>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label htmlFor="password">Password *</label>
            <input defaultValue={password} type="password" name="password" id="password" required />
          </div>
          <div className="field">
            <label htmlFor="password_repeat">Repeat Password *</label>
            <input defaultValue={password} type="password" name="password_repeat" id="password_repeat" required />
          </div>
        </div>
        <div className="one fields">
          <div className="field">
            <button className="ui green button" type="submit">Create User</button>
          </div>
        </div>
      </form>
    );
  }
}

export default UserForm;
