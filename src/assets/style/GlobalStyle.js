import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
 
 html {
     box-sizing: border-box;
     overflow-x: hidden;
  
 }
 *, *::after, *::before {
     box-sizing: border-box;
 }
 body {
   font-family: 'Montserrat', sans-serif;
   margin: 0;
   padding: 0;
   overflow-x: hidden;
   width: 100vw;
 } 
  
 a, button {
  font-family: 'Montserrat', sans-serif;
 }
 `;
