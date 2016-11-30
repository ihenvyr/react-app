import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const BlogPage = () => {
  return (
    <div>
      <Helmet title="Blog"
              meta={[
                { name: "description", content: "Blog" }
              ]}
      />
      <h2>Blog</h2>
      <p>Loop blog posts here..</p>
    </div>
  );
};
BlogPage.propTypes = {};
BlogPage.defaultProps = {};

export default withRouter(BlogPage);
