import styled from "styled-components"

export const Wrapper = styled.div`
max-width: var(--maxWidth);
margin:0 auto;
padding: 0 20px;
 h1{
     color:var(--medGrey);
     width:100%;
     text-align: center;
     margin: 12px 0 13px;

     @media screen and (max-width: 768px){
         font-size: var(--fontBig);
     };
 }
`;

export const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap:2rem;
`;

