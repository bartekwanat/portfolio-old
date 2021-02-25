import styled from 'styled-components';

export const StyledAboutMeInfo = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 400px;
    transform: scale(1.7);
  }
`;
