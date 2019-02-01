import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from 'components/Title';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <section className="section">
      <Title>404: Not Found</Title>
      <p className="has-text-centered">
        You just hit a route that does not exist.
        {' '}
        <span role="img" aria-label="confused">
          😕
        </span>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
