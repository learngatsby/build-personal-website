import React from 'react';
import PropType from 'prop-types';

const Title = ({ children }) => (
  <>
    <h1 className="title has-text-centered has-text-light">{children}</h1>
    <hr />
  </>
);

Title.propTypes = {
  children: PropType.node.isRequired,
};

export default Title;
