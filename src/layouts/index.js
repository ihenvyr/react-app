import React from 'react';
// import DevTools from 'mobx-react-devtools';

export default (props) => {
  let Layout;

  // Dynamically choose Layout
  if (props.location.pathname.indexOf('/admin') != -1) {
    Layout = require('./AdminLayout').default;
  } else {
    Layout = require('./DefaultLayout').default;
  }

  return (
    <div>
      {/* __DEV__ ? <DevTools /> : null */}
      <Layout>{props.children}</Layout>
    </div>
  );
};
