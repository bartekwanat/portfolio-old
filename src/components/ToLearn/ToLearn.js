import React from 'react';
import { StyledToLearn } from './ToLearn.style';
import { ToLearnLeft } from 'components/ToLearn/ToLearnLeft/ToLearnLeft';
import { ToLearnRight } from 'components/ToLearn/ToLearnRight/ToLearnRight';

export const ToLearn = () => (
  <StyledToLearn>
    <ToLearnLeft />
    <ToLearnRight />
  </StyledToLearn>
);
