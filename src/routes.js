import LayoutController from './layouts';
import Home from './pages/HomePage';

if (__DEV__) {
  // TODO check this bug after react-hot-reload update
  // temporary fix react-hot-reload on development
  // just ignore "[HMR] unexpected require(453) from disposed module 413" warning when switching routes
  require('./pages/admin/HomeAdminPage');
  require('./pages/admin/ModelsAdminPage');
  require('./pages/admin/SalesAdminPage');
  require('./pages/admin/SalesDailyAdminPage');
  require('./pages/admin/SalesWeeklyAdminPage');
  require('./pages/admin/SalesMonthlyAdminPage');
  require('./pages/admin/SalesBestsellersAdminPage');
  require('./pages/admin/ModelsUserAdminPage');
  require('./pages/admin/ModelsProductAdminPage');
  require('./pages/admin/ModelsPostAdminPage');
  require('./pages/admin/OrdersAdminPage');
  require('./pages/admin/OrdersAllAdminPage');
  require('./pages/admin/OrdersAwaitingPaymentAdminPage');
  require('./pages/admin/OrdersReadyToShipAdminPage');
  require('./pages/admin/OrdersCompletedAdminPage');
  require('./pages/admin/CustomersAdminPage');
  require('./pages/admin/CustomersAllAdminPage');
  require('./pages/admin/CustomersRepeatAdminPage');
  require('./pages/admin/CustomersProspectAdminPage');
  require('./pages/admin/ProductsAdminPage');
  require('./pages/admin/ProductsAllAdminPage');
  require('./pages/admin/ProductsSoldoutAdminPage');
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
          callback(null, require('./pages/admin/HomeAdminPage').default);
        });
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
