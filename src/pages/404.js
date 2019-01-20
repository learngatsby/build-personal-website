import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section container">
      <h1 className="title has-text-centered">404: Not Found</h1>
      <hr />
      <p className="has-text-centered">
        You just hit a route that does not exist.
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
