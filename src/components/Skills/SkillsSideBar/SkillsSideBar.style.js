import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledSkillsSideBar = styled.div`
  width: 100%;
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    transform: translateX(-25vw);
    font-size: 10vh;
    ${media.tabletPortrait} {
      font-size: 8vh;
    }
  }

  svg {
    transform: translateY(-2vh) translateX(5vw);
    height: 15vh;
    width: 15vw;
  }
`;
