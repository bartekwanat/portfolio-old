import React, { useState } from 'react';
import { StyledAboutMeInfo } from './AboutMeSection.styles';
import { SectionTitle } from 'components/atoms/SectionTitle';
import { AboutMeName } from 'components/atoms/AboutMeItem/AboutMeName';
import { AboutMeText } from 'components/atoms/AboutMeItem/AboutMeText';
import { ReactComponent as FrayedBar } from 'assets/icons/frayed-bar.svg';

export function AboutMeSection(props) {
  return (
    <StyledAboutMeInfo>
      <SectionTitle title='about me'></SectionTitle>
      <AboutMeName />
      <AboutMeText />
      <FrayedBar />
    </StyledAboutMeInfo>
  );
};
