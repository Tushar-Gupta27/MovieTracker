import React from "react";
import {Wrapper,Image} from "./Actor-styles"


function Actor({name,character,imageUrl}){

    return(
        <Wrapper>
            <Image src={imageUrl} alt="actor-thumb"></Image>
            <h3>{name}</h3>  
            <p>{character}</p>
        </Wrapper>
    )
}


export default Actor;