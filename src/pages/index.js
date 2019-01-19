import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
    </Helmet>
    <h1 className="title has-text-centered">
      Luan Orlandi
    </h1>
    <h2 className="subtitle has-text-centered">
      Web Developer
    </h2>
    <div className="has-text-centered">
      <a href="https://github.com/luanorlandi" aria-label="github">
        <span className="icon is-large">
          <i className="fab fa-2x fa-github" />
        </span>
      </a>
      <a href="https://twitter.com/luanorlandi" aria-label="twitter">
        <span className="icon is-large">
          <i className="fab fa-2x fa-twitter" />
        </span>
      </a>
      <a href="https://medium.com/@luanorlandi" aria-label="medium">
        <span className="icon is-large">
          <i className="fab fa-2x fa-medium" />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/luanorlandi/" aria-label="linkedin">
        <span className="icon is-large">
          <i className="fab fa-2x fa-linkedin" />
        </span>
      </a>
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">
        Hello, I am Luan Orlandi!
      </h4>
      <p>
        {`I'm a Web Developer, I work with Front-end creating apps and web pages.
        I participate in events about technology and I like to study productivity and communication, it helps me stay organized and collaborative.`}
      </p>
      <p>
        I develop projects mostly with JavaScript using React and Node.
      </p>
      <p>
        Check out my
        {' '}
        <Link to="/projects">projects</Link>
        {'.'}
      </p>
    </section>
  </Layout>
);

export default Home;
