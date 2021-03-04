import React from 'react';
import { StyledSklills } from './Skills.styles';
import { SkillsSideBar } from 'components/Skills/SkillsSideBar/SkillsSideBar';
import { SkillsList } from 'components/Skills/SkillsList/SkillsList';

export const Skills = () => {
  return (
    <StyledSklills>
      <SkillsSideBar />
      <SkillsList />
    </StyledSklills>
  );
};
