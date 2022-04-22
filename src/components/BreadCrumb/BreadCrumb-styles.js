import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: flex-start;
color:white;
background: var(--medGrey);
height: 70px;

`;

export const Content = styled.div`
max-width: var(--maxWidth);
display: flex;
width: 100%;
margin: auto;
span{
    font-size: var(--fontMed);
    margin:0 4px;
    @media screen and (max-width:768px){
        font-size: var(--fontSmall);
    }
}
a{
    color: white;
    text-decoration: none;
    :visited{
        color:white;
    
    }
}
`;
