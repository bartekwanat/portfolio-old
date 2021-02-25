import { GlobalStyle } from 'assets/style/GlobalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/style/theme';
import HelloPage from 'views/HelloPage/HelloPage';
import { AboutMePage } from 'views/AboutMePage/AboutMePage';
import { Skills } from 'views/Skills/Skills';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HelloPage />
    <AboutMePage />
    <Skills />
  </ThemeProvider>
);

export default Root;
