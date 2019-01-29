import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import ogImage from 'assets/images/luanorlandi.jpg';

const siteQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
  }
`;

const SEO = ({
  pageTitle,
  description,
  keywords,
  meta,
}) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={pageTitle || data.site.siteMetadata.title}
        titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: data.site.siteMetadata.author },
          { name: 'twitter:title', content: pageTitle },
          { name: 'twitter:description', content: description },
          { property: 'og:title', content: pageTitle },
          { property: 'og:description', content: description },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: data.site.siteMetadata.siteUrl },
          { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}${ogImage}` },
          { property: 'og:image:alt', content: description },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:width', content: '1365' },
          { property: 'og:image:height', content: '1365' },
        ].concat(meta)}
      />
    )}
  />
);


SEO.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  pageTitle: null,
  description: '',
  keywords: '',
  meta: [],
};


export default SEO;
