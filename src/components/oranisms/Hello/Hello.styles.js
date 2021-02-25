import styled from 'styled-components';

export const StyledHello = styled.h1`
  overflow: hidden;
  display: flex;
  height: 70vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;

  .photo {
    position: absolute;
    bottom: 30vh;
    right: 20vw;
    transform: scale(2.5);
      }
  .navArrow {
    height: 200px;
    width: 200px;
    position: absolute;
    bottom: 10vh;
    left: 40vw;
  }
`;
