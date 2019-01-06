import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <>
    <h1 className="title has-text-centered has-text-light">
      {children}
    </h1>
    <hr />
  </>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
