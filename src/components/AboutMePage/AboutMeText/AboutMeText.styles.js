import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 480px)',
  phoneLarge: '@media(min-width: 481px) and (max-width: 600px)',
  tablets: '@media(min-width: 601px) and (max-width:1000px)',
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
  }

  .title {
    font-size: 5vw;
    text-align: center;
    margin: 0;

    ${media.phone} {
      font-size: 9vw;
    }
    &::after {
      content: '.';
      color: ${({ theme }) => theme.colors.third};
    }
  }

  .name {
    font-size: 3vw;
    text-align: center;

    ${media.phone} {
      font-size: 6vw;
    }
  }

  .para {
    font-size: 1.5vw;
    width: 70%;
    text-align: center;

    ${media.phone} {
      font-size: 4vw;
    }
  }

  img {
    width: 60%;
    height: auto;
  }
`;
