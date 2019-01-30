import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';

export const queryImage = graphql`
  query {
    post1: file(relativePath: { eq: "how-gatsby-is-blazing-fast.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    post2: file(relativePath: { eq: "learn-react.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <SEO
      pageTitle="Blog"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Blog</h1>
      <hr />
      <p className="has-text-centered">
        Follow me on
        {' '}
        <a href="https://twitter.com/luanorlandi">
          Twitter
        </a>
        {' '}
        and
        {' '}
        <a href="https://medium.com/@luanorlandi">
          Medium
        </a>
        {' '}
        to read more topics of tech
        {'.'}
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="How Gatsby is blazing fast"
            subtitle="Performance is user experience. Gatsby build fast websites out-of-the-box"
            link="https://medium.freecodecamp.org/how-gatsby-is-blazing-fast-c99a6f2d405e"
            tags={['Gatsby']}
            image={<Img fixed={data.post1.childImageSharp.fixed} alt="Gatsby Course" />}
          />
          <Card
            title="Learn React easily with this rule"
            subtitle="Make it fun"
            link="https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358"
            tags={['React']}
            image={<Img fixed={data.post2.childImageSharp.fixed} />}
          />
        </div>
      </div>
    </section>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;
