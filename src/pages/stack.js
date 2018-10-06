import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Stack = () => (
  <Layout>
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charSet="utf-8"
      />
    </Helmet>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-light has-text-centered">Stack</h1>
        <hr />
        <p className="content has-text-centered">
          Tenho experiência com diversas ferramentas e tecnologias modernas, que
          uso dependendo do projeto.
        </p>
        <p className="content has-text-centered">
          Compartilho minha stack no StackShare:
        </p>
        <div className="columns is-centered">
          <div className="column is-half has-text-centered">
            <a
              frameBorder="0"
              data-theme="dark"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/8c28185217d10812f81a6efc56aff4"
            >
              StackShare
            </a>
          </div>
        </div>
        <p className="has-text-centered">
          Veja meus <Link to="/posts">posts</Link>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Stack;
