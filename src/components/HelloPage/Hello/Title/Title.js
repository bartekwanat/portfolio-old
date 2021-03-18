import React from 'react';
import { StyledTitle, StyledName, Wrapper } from './Title.styles';
import { Spring } from 'react-spring/renderprops';

export const Title = () => (
  <Spring
    from={{ transform: 'translateY(-50%)', opacity: 0 }}
    to={{ transform: 'translateY(0)', opacity: 1 }}
    config={{ delay: 1200, duration: 400 }}
  >
    {(props) => (
      <Wrapper style={props}>
        <StyledTitle>hello</StyledTitle>
        <StyledName>I'm Bartek</StyledName>
      </Wrapper>
    )}
  </Spring>
);
