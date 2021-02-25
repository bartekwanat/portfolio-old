import styled from 'styled-components';

export const WrapperSkillsBox = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    transform: translateX(-20vw);
  }

  svg {
    transform: translateY(-2vh) translateX(5vw);
    height: 15vh;
    width: 15vw;
  }
`;
