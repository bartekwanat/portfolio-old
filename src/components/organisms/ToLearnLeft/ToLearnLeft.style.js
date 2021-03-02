import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledToLearnLeft = styled.div`
  width: 55vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .brain {
    height: 15vh;
    width: auto;
    align-self: center;
    transform: translateY(5vh) translateX(5vw);

    ${media.phone} {
      height: 10vh;
      width: auto;
    }

    ${media.tabletPortrait} {
      height: 10vh;
      transform: translateY(10vh) translateX(5vw);
  }
  }

  .plus {
    height: 20vh;
    align-self: center;
    transform: translateX(-100%);

    ${media.phone} {
      height: 10vh;
      width: 10vh;
      transform: translateX(-100%) translateY(100%);
    }

    ${media.tabletPortrait} {
      height: 10vh;
      width: 10vh;
      transform: translateX(-100%) translateY(100%);
    }
  }
`;

export const Title = styled.h1`
  padding: 40px 50px;
  margin: 0;
  font-size: 10vh;
  width: 35vw;
  max-width: 450px;
  color: ${({ theme }) => theme.colors.white};
  border: 12px solid white;
  align-self: flex-end;
  transform: translateX(12px) translateY(-10vh);

  ${media.phone} {
    font-size: 4vh;
    width: 45vw;
    border: 8px solid white;
    transform: translateY(15vh) translateX(12px);
  }

  ${media.tabletPortrait} {
    font-size: 7vh;
    width: 45vw;
    border: 10px solid white;
    transform: translateY(15vh) translateX(12px);
  }

  &::after {
    content: '?';
    color: ${({ theme }) => theme.colors.third};
  }
`;
