import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledHello = styled.h1`
  overflow: hidden;
  display: flex;
  height: 70vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;

  .photo {
    position: relative;
    bottom: 0vh;
    right: 10vw;
    height: 70%;

    ${media.phone} {
      right: 20vw;
      bottom: -10vh;
      width: 70vw;
      height: auto;
    }

    ${media.tabletPortrait} {
      bottom: -5vh;
    }
  }
  .navArrow {
    height: 7vw;
    position: absolute;
    bottom: 10vh;
    left: 30vw;
    color: ${({ theme }) => theme.colors.third};

    ${media.phone} {
      bottom: 25vh;
      left: 20vw;
      height: 15vw;
    }

    ${media.tabletPortrait} {
      left: 20vw;
      bottom: 25vh;
    }
  }
`;
