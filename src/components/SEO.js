import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const siteQuery = graphql`
  query DefaulSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const SEO = ({ pageTitle }) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <Helmet
        title={pageTitle || data.site.siteMetadata.title}
        titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
      />
    )}
  />
);


SEO.propTypes = {
  pageTitle: PropTypes.string,
};

SEO.defaultProps = {
  pageTitle: null,
};


export default SEO;
