import { SectionTitle } from 'components/atoms/SectionTitle';
import React from 'react';
import { StyledToLearnLeft, Title} from './ToLearnLeft.style';
import  plus  from 'assets/icons/plus.png';
import  brain from 'assets/icons/brain.png';

export const ToLearnLeft = () => (
  <StyledToLearnLeft className="grid-container">
    <img src={brain} className="brain" />
    <img src={plus} className="plus" />
    <Title>What i want to learn</Title>
  </StyledToLearnLeft>
);
