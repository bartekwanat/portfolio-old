import React from 'react';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import { ReactComponent as Logo } from 'assets/icons/Logo.svg';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => (
  <StyledNavigation>
    <Logo />
    <NavigationList />
  </StyledNavigation>
);

export default Navigation;
