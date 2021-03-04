import React from 'react';
import NavigationList from 'components/HelloPage/Navigations/NavigationList/NavigationList';
import Logo from 'assets/icons/Logo.png';
import { StyledNavigation } from './Navigation.styles';
import { Spring } from 'react-spring/renderprops';

const Navigation = () => (
  <Spring 
  from={{ transform: 'translateY(-50%)', opacity: 0 }}
  to={{ transform: 'translateY(0)', opacity: 1 }}
  config={{ delay: 1000, duration: 400 }}>
    {(props) => (
      <div style={props}>
        <StyledNavigation>
          <img src={Logo} />
          <NavigationList />
        </StyledNavigation>
      </div>
    )}
  </Spring>
);

export default Navigation;
