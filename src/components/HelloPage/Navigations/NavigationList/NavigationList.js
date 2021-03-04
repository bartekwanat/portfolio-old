import React from 'react';
import { SecondaryColor, StyledNavigationList } from './NavigationList.styles';
import { Spring } from 'react-spring/renderprops';

const NavigationList = (props) => (
  <Spring from={{ transform: 'translate3d(-10%,-100%, 0)' }} to={{ transform: 'translate3d(-10%,0, 0)' }} config={{ delay: 1000, duration: 400 }}>
    {(props) => (
      <StyledNavigationList style={props}>
        <SecondaryColor>
          <a href="#">about me</a>
        </SecondaryColor>
        <a href="#">skills</a>
        <a href="#">projects</a>
        <a href="#">contact</a>
      </StyledNavigationList>
    )}
  </Spring>
);

export default NavigationList;
