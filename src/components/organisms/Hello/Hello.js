import React from 'react';
import styled, { StyledHello } from 'components/organisms/Hello/Hello.styles';
import { Title } from 'components/molecules/Title/Title';
import { ReactComponent as Arrow } from 'assets/icons/chevron-down-solid.svg';
import photo from 'assets/icons/hello.png';
import { Spring } from 'react-spring/renderprops';

export const Hello = () => (
  <StyledHello>
    <Title></Title>
    <Spring
      from={{ transform: 'translateY(100%)', opacity: 0 }}
      to={{ transform: 'translateY(0)', opacity: 1 }}
      config={{ delay: 1200, duration: 400 }}
    >
      {(props) => (
        <div style={props}>
          <img src={photo} className="photo" />
        </div>
      )}
    </Spring>
  </StyledHello>
);
