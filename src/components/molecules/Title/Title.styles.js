import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  width: 80vh;
  font-size: 250px;
  transform: translateX(10vw) translateY(-10vh);

  &::after {
    content: '.';
    color: ${({ theme }) => theme.colors.third};
  }
`;
