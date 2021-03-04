import React from 'react';
import { theme } from 'assets/style/theme';
import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledNavigationList = styled.div`
  list-style: none;
  display: flex;
  width: 50vw;
  font-size: 4vh;
  justify-content: space-around;
  transform: translateX(-10vw);

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    box-sizing: border-box;
    display: block;
    transform: translateY(5vh);

  }

  ${media.phone} {
    display: none;
  }

  ${media.tabletPortrait} {
    display: none;
  }

  &::after {
    content: "";
    display: block;
    height: 7px;
    width: 40vw;
    background: linear-gradient(90deg, rgba(255,87,87,1) 50%, rgba(255,255,255,1) 100%);
    border-radius: 40px;
    position: absolute;
    top: 12vh;

    ${media.tabletPortrait} {
      width: 60vw;
    }
  }
`;

export const SecondaryColor = styled.div`
a{
  color: ${({ theme }) => theme.colors.third};
}
`;
