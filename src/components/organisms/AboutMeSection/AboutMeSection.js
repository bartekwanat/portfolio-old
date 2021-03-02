import React, { useState } from 'react';
import { StyledAboutMeInfo } from './AboutMeSection.styles';
import { SectionTitle } from 'components/atoms/SectionTitle';
import { AboutMeName } from 'components/atoms/AboutMeItem/AboutMeName';
import { AboutMeText } from 'components/atoms/AboutMeItem/AboutMeText';
import { ReactComponent as FrayedBar } from 'assets/icons/frayed-bar.svg';
import {Spring} from 'react-spring/renderprops';



export function AboutMeSection(props) {
  return (
    
      <Spring
      from={{ transform: 'translateY(-50%)', opacity: 0 }}
      to={{ transform: 'translateY(0)', opacity: 1 }}
      config={{ delay: 1000, duration: 400 }}>
        {(props) => (
          <div style={props}>
            <StyledAboutMeInfo>
            <SectionTitle title="about me"></SectionTitle>
            <AboutMeName />
            <AboutMeText />
            <FrayedBar />
            </StyledAboutMeInfo>
          </div>
        )}
      </Spring>
    
  );
}
