import styled from "styled-components";

export const Wrapper = styled.div`
background:linear-gradient(to bottom , rgba(0,0,0,0.1) 41%, rgba(0,0,0,0.7) 100%) , 
url(${({image}) => image});
background-size: cover;
background-position: center;
height: 600px;
position: relative;
animation: animateHeroImage 1s;

@keyframes animateHeroImage{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
`;

export const Content = styled.div`
padding:20px;
max-width: var(--maxWidth);
margin: 0 auto;
`;

export const Text = styled.div`
z-index:1000;
max-width: 1150px;
word-wrap: break-word;
position: absolute;
bottom: 40px;
padding:10px 15px;
min-height: 100px;
color:var(--white);
 h1{
     font-size: var(--fontSuperBig);
     margin:10px 0;
     @media screen and (max-width:720px){
         font-size: var(--fontBig);
     }

 }
 p{
     font-size: var(--fontMed);
     @media screen and (max-width:720px){
         font-size: var(--fontSmall);
     }
 }

 @media screen and (max-width){
     max-width: 100%;
 }
`;
