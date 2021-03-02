import React from 'react';
import NavigationItem from 'components/atoms/NavigationItem/NavigationItem';
import { SecondaryColor, StyledNavigationList } from './NavigationList.styles';
import { Spring } from 'react-spring/renderprops';

const isSecondary = (props) => {
  if (props.className === 'secondary') {
    props.color = 'red';
  }
};

const NavigationList = (props) => (
  <Spring from={{ transform: 'translate3d(-10%,-100%, 0)' }} to={{ transform: 'translate3d(-10%,0, 0)' }} config={{delay: 1000, duration: 400}}>
    {(props) => (
      <StyledNavigationList style={props}>
        <SecondaryColor>
          <NavigationItem text="about me" />
        </SecondaryColor>
        <NavigationItem text="skills" />
        <NavigationItem text="projects" />
        <NavigationItem text="contact me" />
      </StyledNavigationList>
    )}
  </Spring>
);

export default NavigationList;
