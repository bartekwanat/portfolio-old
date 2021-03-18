import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledAboutMePage = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    height: 100vh;
    width: 100%;
  }

  .white {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 50vw;
  }

  .black {
    background-color: black;
    width: 50vw;
  }
`;
