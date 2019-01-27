import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Projects = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Projects</h1>
      <hr />
      <p className="has-text-centered">
        Some of my projects, see more on my
        {' '}
        <a href="https://github.com/luanorlandi">
          GitHub
        </a>
        .
      </p>
      <ul className="has-text-centered">
        <li>
          <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal">
            Gatsby Course
          </a>
        </li>
        <li>
          <a href="https://kassellabs.io">
            Kassel Labs
          </a>
        </li>
        <li>
          <a href="https://luanorlandi.github.io/tic-tac-porg">
            Tic-tac-porg
          </a>
        </li>
      </ul>
    </section>
  </Layout>
);

export default Projects;
