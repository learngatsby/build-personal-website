import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Stack = () => (
  <Layout>
    <SEO
      title="Stack"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charSet="utf-8"
      />
    </Helmet>
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Stack</h1>
      <hr />
      <div className="container has-text-centered">
        <p className="content">
          I have experience with many modern tools,
          I select them for my projects depending on the usage.
        </p>
        <p className="content">Here is my stack on StackShare:</p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <a
              frameBorder="0"
              data-theme="light"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/8c28185217d10812f81a6efc56aff4"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;
