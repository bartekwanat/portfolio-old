import styled from 'styled-components';

export const ContactWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    align-items: center;
    justify-items: center;
    width: 50%;
    height: 100%;
  }

  .side {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .title {
      height: auto;
      font-size: 4rem;

      &::after {
        content: '.';
        color: ${({ theme }) => theme.colors.third};
      }

      .icons {
        height: 15%;
        width: auto;
      }
    }
  }
`;
