import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <Helmet title="Luan Orlandi" />
    <h1>Luan Orlandi</h1>
    <h2>Web Developer</h2>
    <section>
      <h4>Hello, I am Luan Orlandi!</h4>
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
        .
      </p>
    </section>
  </Layout>
);

export default Home;
