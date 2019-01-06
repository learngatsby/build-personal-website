import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Title from 'components/Title';
import Card from 'components/Card';
import LearnReact from 'components/Images/LearnReact';

const Posts = () => (
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
              image={LearnReact}
              tags={['React']}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Posts;
