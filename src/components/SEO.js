import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const siteQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const SEO = ({ title }) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title || data.site.siteMetadata.title}
        titleTemplate={title && `%s | ${data.site.siteMetadata.title}`}
      />
    )}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
};

export default SEO;
