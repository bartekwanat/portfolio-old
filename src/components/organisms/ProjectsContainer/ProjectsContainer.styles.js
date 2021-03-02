import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledProjectsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 50%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  ${media.phone} {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 70%;
  }

  ${media.tabletPortrait} {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 70%;
  }

  div {
    height: 25vh;
    width: 25vh;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.phone} {
      height: 15vh;
      width: 15vh;
    }
    ${media.tabletPortrait} {
      height: 17vh;
      width: 17vh;
    }
    
    img {
        height: 70%;
        width: 70%;
        
      
    }
  }
`;
