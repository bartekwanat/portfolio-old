import React from 'react';
import { SectionTitle } from 'components/atoms/SectionTitle';
import { WrapperSkillsBox } from './SkillsBox.styles';
import { ReactComponent as Puzzle } from 'assets/icons/puzzle.svg';

export const SkillsBox = (props) => (
  <WrapperSkillsBox>
    <Puzzle />
    <SectionTitle title="skills"></SectionTitle>
  </WrapperSkillsBox>
);
