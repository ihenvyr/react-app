import LayoutController from './layouts';
import Home from './pages/public/HomePage';

if (__DEV__) {
  // TODO check this bug after react-hot-reload update
  // temporary fix react-hot-reload on development
  // just ignore "[HMR] unexpected require(453) from disposed module 413" warning when switching routes
  require('./pages/public/AboutPage');
  require('./pages/public/DemosPage');
  require('./pages/public/SignupPage');
  require('./pages/public/SigninPage');
  require('./pages/public/SignoutPage');
  require('./pages/public/CounterPage');
  require('./pages/public/NotFoundPage');
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
          callback(null, require('./pages/admin/HomeAdminPage').default);
        });
      },
      onEnter: (nextState, replace) => {
        const logged_in = true;
        if (logged_in) {
          return;
        }
        // redirect to signin page..
        replace('/admin/signin');
        // replace({
        //   pathname: '/signin',
        //   state: { nextPathName: nextState.location.pathname },
        // });
      },
      childRoutes: [
        {
          path: 'orders', component: require('./pages/admin/OrdersAdminPage').default,
          childRoutes: [
            { path: 'all', component: require('./pages/admin/OrdersAllAdminPage').default },
            { path: 'awaiting-payment', component: require('./pages/admin/OrdersAwaitingPaymentAdminPage').default },
            { path: 'ready-to-ship', component: require('./pages/admin/OrdersReadyToShipAdminPage').default },
            { path: 'completed', component: require('./pages/admin/OrdersCompletedAdminPage').default },
          ]
        },
        {
          path: 'customers', component: require('./pages/admin/CustomersAdminPage').default,
          childRoutes: [
            { path: 'all', component: require('./pages/admin/CustomersAllAdminPage').default },
            { path: 'repeat', component: require('./pages/admin/CustomersRepeatAdminPage').default },
            { path: 'prospect', component: require('./pages/admin/CustomersProspectAdminPage').default },
          ]
        },
        {
          path: 'products', component: require('./pages/admin/ProductsAdminPage').default,
          childRoutes: [
            { path: 'all', component: require('./pages/admin/ProductsAllAdminPage').default },
            { path: 'soldout', component: require('./pages/admin/ProductsSoldoutAdminPage').default },
          ]
        },
        {
          path: 'models', component: require('./pages/admin/models/ModelsAdminPage').default,
          childRoutes: [
            {
              path: 'users', component: require('./pages/admin/models/ModelsUserAdminPage').default,
              childRoutes: [
                { path: 'new', component: require('./pages/admin/models/ModelsUserNewAdminPage').default },
              ],
            },
            { path: 'products', component: require('./pages/admin/models/ModelsProductAdminPage').default },
            { path: 'posts', component: require('./pages/admin/models/ModelsPostAdminPage').default },
          ]
        },
        {
          path: 'reports', component: require('./pages/admin/ReportsAdminPage').default,
          childRoutes: [
            { path: 'sales', component: require('./pages/admin/ReportsSalesAdminPage').default },
            { path: 'visitors', component: require('./pages/admin/ReportsVisitorsAdminPage').default },
            { path: 'customers', component: require('./pages/admin/ReportsCustomersAdminPage').default },
          ]
        },
      ],
    },
    {
      path: 'about',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/AboutPage').default);
        });
      }
    },
    {
      path: 'blog',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/BlogPage').default);
        });
      }
    },
    {
      path: 'demos',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/DemosPage').default);
        });
      },
      childRoutes: [
        { path: 'counter', component: require('./pages/public/CounterPage').default },
      ]
    },
    {
      path: 'signup',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/SignupPage').default);
        });
      }
    },
    {
      path: 'signin',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/SigninPage').default);
        });
      }
    },
    {
      path: 'signout',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/SignoutPage').default);
        });
      }
    },
    {
      path: '*',
      getComponents(nextState, callback) {
        require.ensure([], function(require) {
          callback(null, require('./pages/public/NotFoundPage').default);
        });
      }
    }
  ]
};

export default routes;
