import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Title from 'components/Title';
import Card from 'components/Card';

export const queryImages = graphql`
  query {
    project1: file(relativePath: { eq: "learn-react.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Posts = ({ data }) => (
  <Layout>
    <SEO
      title="Posts"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Posts</Title>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Card
              title="Learn React easily with this rule"
              subtitle="Make it fun"
              link="https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358"
              tags={['React']}
              image={<Img fixed={data.project1.childImageSharp.fixed} />}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

Posts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Posts;
