import React, { useState } from 'react';
import NavigationItem from 'components/atoms/NavigationItem/NavigationItem';
import { SecondaryColor } from 'components/molecules/NavigationList/NavigationList.styles';
import { StyledBurgerMenu, StyledBurger } from './BurgerMenu.styles';
import { ReactComponent as Burger } from 'assets/icons/Burger.svg';

function BurgerMenu({}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Burger />
      </StyledBurger>

      <StyledBurgerMenu open={open}>
        <SecondaryColor>
          <NavigationItem text="about me" />
        </SecondaryColor>
        <NavigationItem text="skills" />
        <NavigationItem text="projects" />
        <NavigationItem text="contact me" />
      </StyledBurgerMenu>
    </>
  );
}

export default BurgerMenu;
