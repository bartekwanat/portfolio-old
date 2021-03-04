import React from 'react';
import { StyledSideBar, StyledDotted } from './SideBar.styles';
import { ReactComponent as Dotted } from 'assets/icons/dotted.svg';

export const SideBar = () => (
  <StyledSideBar>
    <StyledDotted>
      <Dotted />
    </StyledDotted>
  </StyledSideBar>
);
