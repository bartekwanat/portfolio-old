import React from 'react';
import PropTypes from 'prop-types';
import { StyledSkillsItem } from './SkillsListItem.styles';

export const SkillsListItem = ({ skills: { name, url } }) => (
  <StyledSkillsItem style={{ backgroundImage: `url(${url})` }} alt={url}></StyledSkillsItem>
);
SkillsListItem.propTypes = {
  skills: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
