import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import GatsbyCourse from 'components/Images/GatsbyCourse';
import TicTacPorg from 'components/Images/TicTacPorg';
import Memepool from 'components/Images/Memepool';
import WestworldIntroCreator from 'components/Images/WestworldIntroCreator';

const Projects = () => (
  <Layout>
    <SEO
      title="Projects"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered has-text-light">Projects</h1>
      <div className="container">
        <hr />
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
              image={GatsbyCourse}
              tags={['Gatsby', 'React']}
            />
            <Card
              title="Tic-tac-porg"
              subtitle="Play tic-tac-toe with Star Wars theme"
              link="https://luanorlandi.github.io/tic-tac-porg"
              image={TicTacPorg}
              tags={['React', 'PWA']}
            />
            <Card
              title="Memepool"
              subtitle="Discord bot that play meme sounds"
              link="https://github.com/luanorlandi/memepool"
              image={Memepool}
              tags={['Node', 'Heroku']}
            />
            <Card
              title="Westworld Intro Creator"
              subtitle="Create your own Westworld opening"
              link="https://westworldintrocreator.kassellabs.io/"
              image={WestworldIntroCreator}
              tags={['Gatsby', 'React']}
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

export default Projects;
