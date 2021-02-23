import styled from 'styled-components';

export const StyledHelloPage = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;
