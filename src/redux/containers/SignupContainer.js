import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import { userSignup } from '../../redux/actions';

const SignupContainer = (props) => {
  return <Signup {...props} />
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userSignup
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
