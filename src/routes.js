import LayoutController from './layouts';
import Home from './pages/HomePage';

if (__DEV__) {
  // TODO check this bug after react-hot-reload update
  // temporary fix react-hot-reload on development
  // just ignore "[HMR] unexpected require(453) from disposed module 413" warning when switching routes
  require('./pages/admin/DashboardAdminPage');
  require('./pages/admin/ModelsAdminPage');
  require('./pages/admin/SalesAdminPage');
  require('./pages/admin/SalesDailyAdminPage');
  require('./pages/admin/SalesWeeklyAdminPage');
  require('./pages/admin/SalesMonthlyAdminPage');
  require('./pages/admin/SalesBestsellersAdminPage');
  require('./pages/admin/ModelsUserAdminPage');
  require('./pages/admin/ModelsProductAdminPage');
  require('./pages/admin/ModelsPostAdminPage');
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
      path: 'admin',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/admin/DashboardAdminPage').default);
        });
      },
      childRoutes: [
        {
          path: 'models', component: require('./pages/admin/ModelsAdminPage').default,
          childRoutes: [
            { path: 'users', component: require('./pages/admin/ModelsUserAdminPage').default },
            { path: 'products', component: require('./pages/admin/ModelsProductAdminPage').default },
            { path: 'posts', component: require('./pages/admin/ModelsPostAdminPage').default },
          ]
        },
        {
          path: 'sales', component: require('./pages/admin/SalesAdminPage').default,
          childRoutes: [
            { path: 'daily', component: require('./pages/admin/SalesDailyAdminPage').default },
            { path: 'weekly', component: require('./pages/admin/SalesWeeklyAdminPage').default },
            { path: 'monthly', component: require('./pages/admin/SalesMonthlyAdminPage').default },
            { path: 'bestsellers', component: require('./pages/admin/SalesBestsellersAdminPage').default },
          ]
        },
      ],
    },
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
        { path: 'counter', component: require('./pages/CounterPage').default },
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
