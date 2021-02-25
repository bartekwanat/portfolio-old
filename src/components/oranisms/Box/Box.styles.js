import styled from 'styled-components';

export const StyledBox = styled.div`
  height: 100%;
  width: 25%;
  background-color: ${({ theme }) => theme.colors.third};
`;
export const StyledDotted = styled.svg`
  transform: rotateZ(90deg) scale(2.5);
  position: relative;
  top: 30vh;
  
`;
