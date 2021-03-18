import React from 'react';
import Navigation from 'components/HelloPage/Navigations/Navigation';
import { StyledHelloPage } from 'components/HelloPage/HelloPage.styles';
import { Hello } from 'components/HelloPage/Hello/Hello';

const HelloPage = () => (
  <StyledHelloPage>
    <Navigation />
    <Hello></Hello>
  </StyledHelloPage>
);

export default HelloPage;
