import React from 'react';
import { StyledSklills } from './Skills.styles';
import { SkillsBox } from 'components/molecules/SkillsBox/SkillsBox';
import { SkillsList } from 'components/molecules/SkillsList/SkillsList';

export const Skills = () => (
  <StyledSklills>
    <SkillsBox></SkillsBox>
    <SkillsList />
  </StyledSklills>
)
