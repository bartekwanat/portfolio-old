import React from 'react';
import { StyledSectionTitle } from 'components/AboutMePage/AboutMeText/AboutMeItem/AboutMeItem.styles';

export function SectionTitle(props) {
  return <StyledSectionTitle>{props.title}</StyledSectionTitle>;
}
