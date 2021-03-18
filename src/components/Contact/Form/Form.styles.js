import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 30vw;
  justify-content: flex-start;
  align-items: center;
  border: 8px solid black;
  border-radius: 30px;
  padding: 30px;
  margin-bottom: 40px;
  border: 8px solid black;
  }

  .field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      font-size: 1.5em;
    }

    input {
      border: 7px solid black;
      border-radius: 30px;
      height: 20%;
      width: 20vw;
      margin-top: 10px;
      font-size: 1.3rem;
      text-align: center;
    }

    .message {
      height: 30vh;
    }
  }

  #button {
    height: 50px;
    width: 200px;
    border: 2px solid black;
    background-color: black;
    margin-top: 20px;
    border-radius: 30px;
    border: 7px solid black;
    font-size: 1.5rem;
    color: white;
  }
`;
