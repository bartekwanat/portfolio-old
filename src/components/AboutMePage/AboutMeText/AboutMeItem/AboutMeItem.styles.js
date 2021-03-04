import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledAboutMeInfo = styled.div``;

export const StyledSectionTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 9vh;

  ${media.phone} {
    font-size: 7vh;
  }

  ${media.tabletPortrait} {
    font-size: 7vh;
  }

  &::after {
    content: '.';
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const StyledAboutMeName = styled.h2`
  font-size: 3.5vh;
  
  ${media.phone} {
    font-size: 2.5vh;
    text-align: center;
  }
  ${media.tabletPortrait} {
    font-size: 2.5vh;
  }
`;

export const StyledAboutMeText = styled.p`
  font-size: 3vh;
  width: 50%;
  ${media.phone} {
    font-size: 2vh;
  }

  ${media.tabletPortrait} {
    font-size: 2.7vh;
  }
`;
