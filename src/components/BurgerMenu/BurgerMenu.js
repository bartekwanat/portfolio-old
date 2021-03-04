import React, { useState } from 'react';

import { SecondaryColor } from 'components/HelloPage/Navigations/NavigationList/NavigationList.styles';
import { StyledBurgerMenu, StyledBurger } from './BurgerMenu.styles';
import { ReactComponent as Burger } from 'assets/icons/Burger.svg';
import { AboutMeSection } from 'components/AboutMePage/AboutMeText/AboutMeText';

function BurgerMenu({}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Burger />
      </StyledBurger>

      <StyledBurgerMenu open={open}>
        <SecondaryColor>
          <a href="#">about me</a>
        </SecondaryColor>
        <a href="#">skills</a>
        <a href="#">projects</a>
        <a href="#">contact</a>
      </StyledBurgerMenu>
    </>
  );
}

export default BurgerMenu;
