import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faMedium, faLinkedin,
} from '@fortawesome/fontawesome-free-brands';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

library.add(faGithub, faTwitter, faMedium, faLinkedin);

const Home = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <div className="container">
      <div className="columns is-mobile">
        <div className="column">
          <figure className="photo image is-128x128">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "luanorlandi.jpg" }) {
                    childImageSharp {
                      fixed(width: 128, height: 128) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img
                  fixed={data.placeholderImage.childImageSharp.fixed}
                  imgStyle={{ borderRadius: '100%' }}
                  alt="Luan Orlandi"
                />
              )}
            />
          </figure>
          <h1 className="title has-text-centered has-text-light">
            Luan Orlandi
          </h1>
          <h2 className="subtitle has-text-centered has-text-warning">
            Web Developer
          </h2>
        </div>
      </div>
      <div className="has-text-centered is-mobile">
        <a href="https://github.com/luanorlandi" aria-label="github">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={['fab', 'github']} />
          </span>
        </a>
        <a href="https://twitter.com/luanorlandi" aria-label="twitter">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={['fab', 'twitter']} />
          </span>
        </a>
        <a href="https://medium.com/@luanorlandi" aria-label="medium">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={['fab', 'medium']} />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/luanorlandi/" aria-label="linkedin">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={['fab', 'linkedin']} />
          </span>
        </a>
      </div>
    </div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <h4 className="title has-text-light">
          Hello, I am Luan Orlandi!
          {' '}
          <span className="emoji" role="img" aria-label="wave">
          👋
          </span>
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
      </div>
    </section>
  </Layout>
);

export default Home;
