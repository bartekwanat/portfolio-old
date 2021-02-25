import styled from 'styled-components';

export const StyledSkillsList = styled.div`
  height: 65vh;
  width: 100vw;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 8vw);
  grid-template-rows: repeat(2, 8vw);
  gap: 50px 50px;
  justify-content: center;
  align-items: center;
  transform: translateY(10vh);

  svg {
    height: 40vh;
    position: absolute;
    bottom: 2vh;
    left: 30vw;
    
  }
`;
