import React from 'react';
import { StyledProjectsTitleBox } from './ProjectsTitleBox.styles';
import { SectionTitle } from 'components/atoms/SectionTitle';
import bulb from 'assets/icons/bulb.png';
import pages from 'assets/icons/pages.png';

export const ProjectsTitleBox = () => (
  <StyledProjectsTitleBox>
    <img src={bulb} />
    <SectionTitle title="projects"></SectionTitle>
    <img src={pages} />
  </StyledProjectsTitleBox>
);
