import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledAboutMeInfo = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.phone} {
    width: 100%;
    transform: translateX(15vw);
  }

  svg {
    width: 50vw;
  }
`;
