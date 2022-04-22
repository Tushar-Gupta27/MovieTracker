import styled from "styled-components";

export const Wrapper = styled.button`
display: block;
background: var(--darkGrey);
width:25%;
min-width: 200px;
height:60px;
color:white;
border:0;
font-size: var(--fontBig);
margin:20px auto;
outline:none;
transition: all 0.3s;
border-radius:30px;
:hover{
    opacity: 0.8;
}
`;
