import React from 'react';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import Navigation from 'components/oranisms/Navigations/Navigation';
import { StyledHelloPage } from 'views/HelloPage/HelloPage.styles';
import { Hello } from 'components/oranisms/Hello/Hello';

const HelloPage = () => (
  <StyledHelloPage>
    <Navigation />
    <Hello></Hello>
  </StyledHelloPage>
);

export default HelloPage;
