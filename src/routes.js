import LayoutController from './layouts';
import Home from './pages/HomePage';

if (__DEV__) {
  // TODO check this bug after react-hot-reload update
  // temporary fix react-hot-reload on development
  // just ignore "[HMR] unexpected require(453) from disposed module 413" warning when switching routes
  require('./pages/AboutPage');
  require('./pages/DemosPage');
  require('./pages/SignupPage');
  require('./pages/SigninPage');
  require('./pages/SignoutPage');
  require('./pages/CounterPage');
  require('./pages/NotFoundPage');
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
          callback(null, require('./pages/AboutPage').default);
        });
      }
    },
    {
      path: 'demos',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/DemosPage').default);
        });
      },
      childRoutes: [
        { path: 'counter', component: require('./pages/CounterPage').default }
      ]
    },
    {
      path: 'signup',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/SignupPage').default);
        });
      }
    },
    {
      path: 'signin',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/SigninPage').default);
        });
      }
    },
    {
      path: 'signout',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/SignoutPage').default);
        });
      }
    },
    {
      path: '*',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/NotFoundPage').default);
        });
      }
    }
  ]
};

export default routes;
