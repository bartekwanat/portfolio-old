import { GlobalStyle } from 'assets/style/GlobalStyle';
import React, { useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/style/theme';
import HelloPage from 'components/HelloPage/HelloPage';
import { AboutMePage } from 'components/AboutMePage/AboutMePage';
import { Skills } from 'components/Skills/Skills';
import { ToLearn } from 'components/ToLearn/ToLearn';
import { Projects } from 'components/Projects/Projects';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { StyledBurger } from './Root.styles';
import scroll from 'components/Helpers/scroll';
import { Contact } from 'components/Contact/Contact';

const Root = () => {
  return (
    <div className="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledBurger></StyledBurger>
        <BurgerMenu />
        <HelloPage />
        <AboutMePage />
        <Skills />
        <ToLearn />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  );
};

export default Root;
