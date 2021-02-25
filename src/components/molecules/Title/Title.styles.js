import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  width: 400px;
  font-size: 250px;
  transform: translateX(10vw) translateY(-10vh);

  &::after {
    content: '.';
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const StyledName = styled.h3`
  font-size: 40px;
  margin: 0;
  padding: 0;
  transform: translateX(10vw) translateY(-10vh);
`;

export const StyledArrow = styled.div`
  transform: scale(1.5);
`;
