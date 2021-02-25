import React from 'react';
import { StyledBox, StyledDotted } from './Box.styles';
import { ReactComponent as Dotted } from 'assets/icons/dotted.svg';

export const Box = () => (
  <StyledBox>
    <StyledDotted>
      <Dotted />
    </StyledDotted>
  </StyledBox>
);
