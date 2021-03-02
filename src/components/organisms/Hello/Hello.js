import React from 'react';
import styled, { StyledHello } from 'components/organisms/Hello/Hello.styles';
import { Title } from 'components/molecules/Title/Title';
import { ReactComponent as Arrow } from 'assets/icons/chevron-down-solid.svg';
import photo from 'assets/icons/hello.png';

export const Hello = () => (
  <StyledHello>
    <Title></Title>
    <img src={photo} className="photo"/>
    <Arrow className="navArrow" />
  </StyledHello>
);
