import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const queryImages = graphql`
  query {
    project1: file(relativePath: { eq: "gatsby-course.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project2: file(relativePath: { eq: "kassel-labs.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project3: file(relativePath: { eq: "tic-tac-porg.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Projects = ({ data }) => (
  <Layout>
    <SEO
      title="Projects"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Projects</h1>
      <hr />
      <p className="has-text-centered">
        Some of my featured projects, see more on my
        {' '}
        <a href="https://github.com/luanorlandi">
          GitHub
        </a>
        {'.'}
      </p>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Img fixed={data.project1.childImageSharp.fixed} />
                  </div>
                  <div className="media-content">
                    <h4 className="title is-size-5-desktop is-size-6-touch">
                      Gatsby Course
                    </h4>
                    <p className="subtitle is-size-5-desktop is-size-6-touch">
                      Build your personal website using React
                    </p>
                    <div className="tags">
                      <span className="tag">Gatsby</span>
                      <span className="tag">React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://kassellabs.io">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Img fixed={data.project2.childImageSharp.fixed} />
                  </div>
                  <div className="media-content">
                    <h4 className="title is-size-5-desktop is-size-6-touch">
                      Kassel Labs
                    </h4>
                    <p className="subtitle is-size-5-desktop is-size-6-touch">
                      Helping people express their creativity and imagination
                    </p>
                    <div className="tags">
                      <span className="tag">React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://luanorlandi.github.io/tic-tac-porg">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Img fixed={data.project3.childImageSharp.fixed} />
                  </div>
                  <div className="media-content">
                    <h4 className="title is-size-5-desktop is-size-6-touch">
                      Tic-tac-porg
                    </h4>
                    <p className="subtitle is-size-5-desktop is-size-6-touch">
                      Play tic-tac-toe with Star Wars theme
                    </p>
                    <div className="tags">
                      <span className="tag">React</span>
                      <span className="tag">PWA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;
