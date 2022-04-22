import styled from "styled-components"

export const Spinner = styled.div`
border: 5px solid var(--lightGrey);
border-top: 5px solid var(--medGrey);
height:50px;
width:50px;
border-radius: 50%;
animation: spin 0.8s linear infinite;
margin: 20px auto;

@keyframes spin{
    0%{
      transform:rotate(0) ;
    }
    100%{
        transform: rotate(360deg);
    }
}
`;

