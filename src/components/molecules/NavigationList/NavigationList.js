import React from 'react';
import NavigationItem from 'components/atoms/NavigationItem/NavigationItem';
import { SecondaryColor, StyledNavigationList } from './NavigationList.styles';

const isSecondary = (props) => {
  if (props.className === 'secondary') {
    props.color = 'red';
  }
};

const NavigationList = (props) => (
  <StyledNavigationList>
    <SecondaryColor>
      <NavigationItem text="about me" />
    </SecondaryColor>
    <NavigationItem text="skills" />
    <NavigationItem text="projects" />
    <NavigationItem text="contact me" />
  </StyledNavigationList>
);

export default NavigationList;
