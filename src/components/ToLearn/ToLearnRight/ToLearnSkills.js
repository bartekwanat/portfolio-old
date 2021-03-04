import React from 'react';
import PropTypes from 'prop-types';

export const ToLearnSkills = ({ skills: { name, url } }) => {
  return <li className="to-learn" style={{ backgroundImage: `url(${url})` }} alt={url}></li>;
};
ToLearnSkills.propTypes = {
  skills: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
