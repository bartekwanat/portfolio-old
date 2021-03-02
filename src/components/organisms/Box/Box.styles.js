import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
};

export const StyledBox = styled.div`
  height: 100%;
  width: 25%;
  background-color: ${({ theme }) => theme.colors.third};
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export const StyledDotted = styled.svg`
  transform: rotateZ(90deg) scale(2);
`;
