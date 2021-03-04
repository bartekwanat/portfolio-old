import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledBurger = styled.div`
  color: ${({theme}) => theme.colors.third};
  opacity: 0.8;
  position: fixed;
  height: 5vh;
  width: 5vh; 
  display: flex;
  right: 10vw;
  top: 10vw;
  


  }

  ${media.phone} {
      display: block;
      height: 7vh;
      width: 11vw;

  }
  ${media.tabletPortrait} {
    display: block;
  }
`;
