import React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';
import postImage from '../assets/learn-react.jpg';

const postCards = [
  {
    title: 'Learn React easily with this rule',
    subtitle: 'Make it fun',
    link:
      'https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358',
    imageLink: postImage,
    tags: ['React'],
  },
];

const Posts = () => (
  <Layout>
    <section className="section">
      <h1 className="title has-text-light has-text-centered">Posts</h1>
      <div className="container">
        <hr />
        <div className="columns is-centered">
          <div className="column is-half">
            {postCards.map(postCard => (
              <Card key={postCard.title} {...postCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Posts;
