import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
align-items: center;
display: flex;
min-height: 100px;
background:var(--darkGrey);
padding:0 20px;
`;

export const Content = styled.div`
display:flex;
justify-content: space-around;
max-width: var(--maxWidth);
width:100%;
margin:0 auto;
.column{
    display: flex;
    align-items: center;
    justify-content: center;
    background:var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    min-height: 40px;
    flex:1;
}

@media screen and (max-width:768px){
    display: block;
    .column{margin: 10px 0;}
}
`;