import { GlobalStyle } from 'assets/style/GlobalStyle';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/style/theme';
import HelloPage from 'views/HelloPage/HelloPage';
import { AboutMePage } from 'views/AboutMePage/AboutMePage';
import { Skills } from 'views/Skills/Skills';
import { ToLearn } from 'views/ToLearn/ToLearn';
import { Projects } from 'views/Projects/Projects';
import BurgerMenu from 'components/organisms/BurgerMenu/BurgerMenu';
import { StyledBurger } from './Root.styles';

const Root = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledBurger>
      </StyledBurger>
      <BurgerMenu />
      <HelloPage />
      <AboutMePage />
      <Skills />
      <ToLearn />
      <Projects />
    </ThemeProvider>
  );
};

export default Root;
