import styled from "styled-components";

export const Image = styled.img`
 width:100%;
 max-width: 720px;
 transition:all 0.3s;
 object-fit: cover;
 border-radius:20px;
animation: animateThumb 0.7s;
box-shadow: ${({boxShadow})=>(boxShadow?"5px 5px 10px 2px black ":null)};

@keyframes animateThumb{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
`;


