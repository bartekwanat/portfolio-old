import React from 'react';
import styled, { StyledHello } from 'components/oranisms/Hello/Hello.styles';
import { Title } from 'components/molecules/Title/Title';
import { ReactComponent as HelloSVG } from 'assets/icons/hello.svg';

export const Hello = () => (
  <StyledHello>
    <Title></Title>
    <HelloSVG />
  </StyledHello>
);
