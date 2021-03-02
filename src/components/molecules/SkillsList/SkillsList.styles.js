import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledSkillsList = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-evenly;
  list-style: none;

  li {
    width: 8vw;
    height: 8vw;
    margin: 20px 20px;

    ${media.phone} {
      height: 12vw;
      width: 12vw;
    }

    ${media.tabletPortrait} {
      height: 11vh;
      width: 11vh;
    }
  }

  svg {
   height: 40vh;

    ${media.phone} {
      height: 20vh;
      right: 0vw;
      bottom: 5vh;
    }
    ${media.tabletPortrait} {
      height: 25vh;
      bottom: 5vh;
    }
  }
`;
