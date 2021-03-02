import React from 'react';
import { StyledToLearn } from './ToLearn.style';
import { ToLearnLeft } from 'components/organisms/ToLearnLeft/ToLearnLeft';
import { ToLearnRight } from 'components/organisms/ToLearnRight/ToLearnRight';

export const ToLearn = () => (
  <StyledToLearn>
    <ToLearnLeft />
    <ToLearnRight />
  </StyledToLearn>
);
