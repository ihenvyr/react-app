import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signin from '../../components/Signin';
import { userSignin } from '../../redux/actions';

const SigninContainer = (props) => {
  return <Signin {...props} />
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userSignin
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
