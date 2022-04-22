import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100px;
background: var(--darkGrey);
padding: 0 20px;
border-top:${(props=> props.border? "0.5px solid var(--medGrey)" : null)}
`;

export const Content = styled.div`
position:relative;
max-width: var(--maxWidth);
width: 100%;
height:60px;
background: var(--medGrey);
margin: 0 auto;
border-radius: 40px;
color:white;
 img{
     position: absolute;
     left:16px;
     top:16px;
     width: 30px;
 }
 input{
     position:absolute;
     padding:8px 60px; 
     height:100%;
     font-size: 28px;
     width:95%;
     background: transparent;
     outline: none;
     color:white;
     border:none;

}
`;
