import React from 'react';
import { theme } from 'assets/style/theme';
import styled from 'styled-components';
import NavigationList from './NavigationList';

export const StyledNavigationList = styled.ul`
  list-style: none;
  display: flex;
  width: 50vw;
  font-size: ${({ theme }) => theme.fontSize.m};
  justify-content: space-around;

  &::after {
    content: "";
    display: block;
    height: 7px;
    width: 40vw;
    background: linear-gradient(90deg, rgba(255,87,87,1) 50%, rgba(255,255,255,1) 100%);
    border-radius: 40px;
    position: absolute;
    top: 10vh;
  }
`;

export const SecondaryColor = styled.div`
  color: ${({ theme }) => theme.colors.third};
`;
