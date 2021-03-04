import styled from 'styled-components';

const media = {
  phone: '@media(max-width: 600px)',
  tabletPortrait: '@media(min-width: 601px) and (max-width:1000px)',
};

export const StyledBurgerMenu = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  color: white;
  position: fixed;
  list-style: none;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100vw)')};
  align-items: center;
  font-size: 5vh;
  transition: 0.5s;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    display: block;
  }
  ${media.phone} {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100vw)')};
  }
  ${media.tabletPortrait} {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100vw)')};
  }

  li {
    margin: 20px 0;
  }

  li :hover {
    font-size: 5.5vh;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const StyledBurger = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.third};
    opacity: 0.8;
    position: fixed;
    height: 6vh;
    width: 6vh;
    display: flex;
    right: 5vw;
    top: 5vw;
    z-index: 9999;

    ${media.phone} {
      display: block;
      height: 7vh;
      width: 11vw;
    }
    ${media.tabletPortrait} {
      display: block;

      cursor: pointer;
    }
  }
`;
