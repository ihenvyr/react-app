import LayoutController from './layouts';
import Home from './pages/Home';

if (__DEV__) {
  // TODO check this bug after react-hot-reload update
  // temporary fix react-hot-reload on development
  // just ignore "[HMR] unexpected require(453) from disposed module 413" warning when switching routes
  require('./pages/About');
  require('./pages/Demos');
  require('./pages/Signup');
  require('./pages/Signin');
  require('./pages/Signout');
  require('./pages/Counter');
  require('./pages/NotFound');
}

const routes = {
  path: '/',
  component: LayoutController,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'about',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/About').default);
        });
      }
    },
    {
      path: 'demos',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/Demos').default);
        });
      },
      childRoutes: [
        { path: 'counter', component: require('./pages/Counter').default }
      ]
    },
    {
      path: 'signup',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/Signup').default);
        });
      }
    },
    {
      path: 'signin',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/Signin').default);
        });
      }
    },
    {
      path: 'signout',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/Signout').default);
        });
      }
    },
    {
      path: '*',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/NotFound').default);
        });
      }
    }
  ]
};

export default routes;
