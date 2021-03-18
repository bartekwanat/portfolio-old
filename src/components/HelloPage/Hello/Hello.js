import React from 'react';
import { StyledHello } from 'components/HelloPage/Hello/Hello.styles';
import { Title } from 'components/HelloPage/Hello/Title/Title';

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
      {(props) => <img style={props} src={photo} className="photo" />}
    </Spring>
  </StyledHello>
);
