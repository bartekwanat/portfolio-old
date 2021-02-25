import React from 'react';
import { skillsData } from 'data/skillsLogo';
import { StyledSkillsList } from './SkillsList.styles';
import { SkillsListItem } from 'components/atoms/SkillsListItem/SkillsListItem';
import { ReactComponent as Multifunction } from 'assets/icons/multifunction.svg';

export function SkillsList() {
  return (
    <StyledSkillsList>
      {skillsData.map((skills) => (
        <SkillsListItem key={skills.name} skills={skills} />
      ))}
      <Multifunction />
    </StyledSkillsList>
  );
}
