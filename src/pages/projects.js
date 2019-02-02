import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';

export const queryImage = graphql`
  query {
    propject1: file(relativePath: { eq: "gatsby-course.jpg" }) {
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
    project4: file(relativePath: { eq: "slack-parrot.png" }) {
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
      pageTitle="Projects"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Projects</Title>
      <p className="has-text-centered">
        Some of my featured projects, see more on my
        {' '}
        <a href="https://github.com/luanorlandi">
          GitHub
        </a>
        .
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="Gatsby Course"
            subtitle="Build your personal website using React"
            link="https://www.udemy.com/gatsby-crie-seu-site-pessoal"
            tags={['Gatsby', 'React']}
            image={<Img fixed={data.propject1.childImageSharp.fixed} alt="Gatsby Course" />}
          />
          <Card
            title="Kassel Labs"
            subtitle="Helping people express their creativity and imagination"
            link="https://kassellabs.io"
            tags={['React']}
            image={<Img fixed={data.project2.childImageSharp.fixed} alt="Kassel Labs logo" />}
          />
          <Card
            title="Tic-tac-porg"
            subtitle="Play tic-tac-toe with Star Wars theme"
            link="https://luanorlandi.github.io/tic-tac-porg"
            tags={['React', 'PWA']}
            image={<Img fixed={data.project3.childImageSharp.fixed} alt="Tic tac toe with porgs and Chewbacca" />}
          />
          <Card
            title="Slack Parrot"
            subtitle="Behold the Party Parrot on your terminal"
            link="https://www.npmjs.com/package/slack-parrot"
            tags={['Node']}
            image={<Img fixed={data.project4.childImageSharp.fixed} alt="Party parrot animation" />}
          />
        </div>
      </div>
      <p className="has-text-centered">
        Check out my
        {' '}
        <Link to="/blog">blog</Link>
        .
      </p>
    </section>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;
