import React from "react"
import { Wrapper,Content } from "./Grid-styles"


function Grid({header,children}){
console.log(children);
    return(
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children} </Content>
        </Wrapper>
    )
}

export default Grid;