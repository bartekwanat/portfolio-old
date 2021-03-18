import React from 'react';
import { StyledAboutMeInfo } from './AboutMeText.styles';

import fryedBar from 'assets/icons/fryed-bar.png';

export function AboutMeSection(props) {
  return (
    <div className="wrapper-about">
      <StyledAboutMeInfo>
        <h1 className="title">about me</h1>
        <h2 className="name">
          My name is <br /> Bartłomiej Wanat
        </h2>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis optio modi tenetur quae! Soluta maiores, officiis aperiam
          ratione quaerat harum voluptates cum sunt in sequi, molestiae, esse aliquam nulla.
        </p>
        <img className="trigger" src={fryedBar} />
      </StyledAboutMeInfo>
    </div>
  );
}
