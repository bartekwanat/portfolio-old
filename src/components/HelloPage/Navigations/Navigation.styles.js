import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledNavigation = styled.div`
  height: 20vh;
  width: 95vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

${media.tabletPortrait} {}

  img {
    height: 10vh;
    width: 10vh;
   transform: translate3d(100%,50%,0);

   ${media.phone} {
     height: 15vw;
     width: 15vw;
     transform: translate3d(100%,50%,0);
   }

   ${media.tabletPortrait} {
     height: 7vh;
     width: 7vh;
     transform: translate3d(100%,100%,0);
   }
  }


`;
