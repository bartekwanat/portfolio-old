import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const Wrapper = styled.div`
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 15vw;
  transform: translateX(10vw) translateY(-10vh);

  ${media.phone} {
    font-size: 12vh;
    transform: translateX(10vw) translateY(-20vh);
  }

  ${media.tabletPortrait} {
    font-size: 15vh;
    transform: translateX(10vw) translateY(-20vh);
  }

  &::after {
    content: '.';
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const StyledName = styled.h3`
  font-size: 3vw;
  margin: 0;
  padding: 0;
  transform: translateX(10vw) translateY(-10vh);

  ${media.phone} {
    transform: translateX(10vw) translateY(-25vh);
    font-size: 4vh;
  }

  ${media.tabletPortrait} {
    font-size: 4vh;
    transform: translateX(10vw) translateY(-20vh);
  }
`;
