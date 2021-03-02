import React, { useState } from 'react';
import styled, { StyledTitle, StyledName, Wrapper } from './Title.styles';
import { Spring } from 'react-spring/renderprops';

export const Title = () => (
  <Spring
    from={{ transform: 'translateY(-50%)', opacity: 0 }}
    to={{ transform: 'translateY(0)', opacity: 1 }}
    config={{ delay: 1200, duration: 400 }}
  >
    {(props) => (
      <div style={props}>
        <Wrapper>
          <StyledTitle>hello</StyledTitle>
          <StyledName>I'm Bartek</StyledName>
        </Wrapper>
      </div>
    )}
  </Spring>
);
