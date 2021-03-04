import React, { useState } from 'react';
import { StyledAboutMeInfo } from './AboutMeText.styles';
import { SectionTitle } from 'components/HelloPage/Hello/Title/SectionTitle';
import { AboutMeName } from 'components/AboutMePage/AboutMeText/AboutMeItem/AboutMeName';
import { AboutMeText } from 'components/AboutMePage/AboutMeText/AboutMeItem/AboutMeText';
import { ReactComponent as FrayedBar } from 'assets/icons/frayed-bar.svg';


export function AboutMeSection(props) {
  
  return (
    <div className="wrapper-about">
      <StyledAboutMeInfo >
        <SectionTitle className="about-me" title="about me"></SectionTitle>
        <AboutMeName />
        <AboutMeText />
        <FrayedBar className="trigger" />
      </StyledAboutMeInfo>
    </div>
  );
}
