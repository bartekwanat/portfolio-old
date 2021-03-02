import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
};

export const StyledProjectsTitleBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 70%;
    ${media.phone} {
      height: 40%;
    }
  }
`;
