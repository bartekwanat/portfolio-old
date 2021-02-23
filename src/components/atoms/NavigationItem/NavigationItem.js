import React from 'react';
import styled, {StyledNavigationItem} from './NavigationItem.styles';

const NavigationItem = (props) => (
  <StyledNavigationItem>
    <li>{props.text}</li>
  </StyledNavigationItem>
);

export default NavigationItem;
