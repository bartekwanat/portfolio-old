import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledToLearnRight = styled.div`
  height: 100vh;
  width: 45vw;
`;

export const SkillsWrapper = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  transform: translateX(10%);

  ${media.phone} {
     transform: translateY(5%);
    }

    ${media.tabletPortrait} {
      transform: translateY(5%);
  }
  
  li {
    height: 20vh;
    width: 20vh;
    list-style: none;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 20px 20px;

    ${media.phone} {
      height: 7vh;
      width: 7vh;
    }

    ${media.tabletPortrait} {
      height: 10vh;
      width: 10vh;
  }

    &:nth-last-child(1) {
      height: 55%;
      width: 20vw;
    }
  }
`;
