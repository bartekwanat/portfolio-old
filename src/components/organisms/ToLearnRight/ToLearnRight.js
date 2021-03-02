import React from 'react';
import { StyledToLearnRight, SkillsWrapper} from './ToLearnRight.style';
import { SkillsListItem } from 'components/atoms/SkillsListItem/SkillsListItem';
import { skillsToLearn } from 'data/skillsToLearn';
import { StyledSkillsList } from 'components/molecules/SkillsList/SkillsList.styles';

export const ToLearnRight = () => (
  <StyledToLearnRight>
      <SkillsWrapper>
    {skillsToLearn.map((skills) => (
      <SkillsListItem key={skills.name} skills={skills} />
    ))}
    </SkillsWrapper>
  </StyledToLearnRight>
);
