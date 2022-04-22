import React from "react";
import {Wrapper,Content} from "./BreadCrumb-styles"
import {Link} from "react-router-dom"


function BreadCrumb({movieTitle}){
    return(
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}


export default BreadCrumb;