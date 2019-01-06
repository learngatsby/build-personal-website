import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Title from 'components/Title';
import Card from 'components/Card';

export const queryImages = graphql`
  query {
    project1: file(relativePath: { eq: "gatsby-course.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project2: file(relativePath: { eq: "memepool.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project3: file(relativePath: { eq: "tic-tac-porg.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project4: file(relativePath: { eq: "westworld-intro-creator.jpg" }) {
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
      <Title>Projects</Title>
      <div className="container">
        <p className="has-text-centered">
          Some of my featured projects, see more on my
          {' '}
          <a
            href="https://github.com/luanorlandi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {'.'}
        </p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Card
              title="Gatsby Course"
              subtitle="Build your personal website using React"
              link="https://www.udemy.com/gatsby-crie-seu-site-pessoal"
              tags={['Gatsby', 'React']}
              image={<Img fixed={data.project1.childImageSharp.fixed} />}
            />
            <Card
              title="Tic-tac-porg"
              subtitle="Play tic-tac-toe with Star Wars theme"
              link="https://luanorlandi.github.io/tic-tac-porg"
              tags={['React', 'PWA']}
              image={<Img fixed={data.project2.childImageSharp.fixed} />}
            />
            <Card
              title="Memepool"
              subtitle="Discord bot that play meme sounds"
              link="https://github.com/luanorlandi/memepool"
              tags={['Node', 'Heroku']}
              image={<Img fixed={data.project3.childImageSharp.fixed} />}
            />
            <Card
              title="Westworld Intro Creator"
              subtitle="Create your own Westworld opening"
              link="https://westworldintrocreator.kassellabs.io/"
              tags={['Gatsby', 'React']}
              image={<Img fixed={data.project4.childImageSharp.fixed} />}
            />
          </div>
        </div>
        <p className="has-text-centered">
          Check out my
          {' '}
          <Link to="/stack">stack</Link>
          {'.'}
        </p>
      </div>
    </section>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;
