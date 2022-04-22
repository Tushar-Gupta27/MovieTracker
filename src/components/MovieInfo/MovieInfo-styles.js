import styled from "styled-components";
import * as config from "../../config"

export const Wrapper = styled.div`
background: ${({backdrop})=>backdrop ? (`url(${config.IMAGE_BASE_URL}${config.BACKDROP_SIZE}${backdrop})`):"#000"};
background-size: cover;
background-position:center;
padding:40px 20px;
animation: animateMovieInfo 1s;

@keyframes animateMovieInfo{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
`;

export const Content = styled.div`
display: flex;
max-width: var(--maxWidth);
margin: 0 auto;
background:rgba(0,0,0,0.7);
border-radius:20px;

@media screen and (max-width:769px){
    display: block;
    max-width: none;
}
`;

export const Text = styled.div`
width: 100%;
padding:20px 40px;
color:white;
overflow: hidden;

.tag{
    font-size:var(--fontMed);
}
.rating-directors{
    display: flex;
    justify-content: flex-start;

}
.score{
    display: flex;
    align-items: center;
    justify-content: center;
    width:35px;
    height:35px;
    background:white;
    color:black;
    font-weight: 800;
    border-radius:50%;
    margin:0;
}
.genre{
    margin: 0 0 0 40px;
    
    div{
        display: flex;
        p{
            margin: 0 3px;
        }

    }
}
.director{
    margin:0 0 0 40px;
    p{
        margin:0;
    }
    
    }

h1{
    margin:0 0 15px 0;
    @media screen and (max-width:768px){
        font-size:var(--fontBig);
    }
}
h3{
    font-size: var(--fontMed);
    margin:0 0 15px 0;
    @media screen and (max-width:768px){
        font-size:var(--fontSmall);
    }
}
p{
    font-size: 1.1rem;
    margin:0 0 15px 0;
    @media screen and (max-width:768px){
        font-size:0.9rem;
    }
}
`;