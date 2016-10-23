import LayoutController from './layouts';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import PageNotFound from './pages/PageNotFound';

const routes = {
  path: '/',
  component: LayoutController,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    { path: 'signup', component: Signup },
    { path: 'signin', component: Signin },
    { path: 'signout', component: Signout },
    { path: '*', component: PageNotFound }
  ]
};

export default routes;
