import React from 'react';
import { StyledAboutMePage } from './AboutMePage.styles';
import { Box } from 'components/organisms/Box/Box';
import { AboutMeSection } from 'components/organisms/AboutMeSection/AboutMeSection';

export const AboutMePage = () => (
  <StyledAboutMePage>
    <Box></Box>
    <AboutMeSection />
  </StyledAboutMePage>
);
