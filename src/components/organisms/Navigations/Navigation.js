import React from 'react';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import Logo  from 'assets/icons/Logo.png';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => (
  <StyledNavigation>
    <img src={Logo} />
    <NavigationList />
  </StyledNavigation>
);

export default Navigation;
