import styled from 'styled-components';

export const StyledAboutMeInfo = styled.div`

`;

export const StyledSectionTitle = styled.h1`
padding: 0;
margin: 0;
font-size: 80px;


&::after {
    content: ".";
    color: ${({theme}) => theme.colors.third}
}
`;

export const StyledAboutMeName = styled.h2`
font-size: 30px;
`;

export const StyledAboutMeText = styled.p`
font-size: 25px;
width: 70%;
`;
