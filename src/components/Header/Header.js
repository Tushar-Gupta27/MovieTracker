import React from "react";
import {Link} from "react-router-dom"
import { Wrapper,Content,TMDBLogoImg,LogoImg } from "./Header-styles";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";


function Header(){
    
    return(
    <Wrapper>
        <Content>
            <Link to="/MovieTracker"><LogoImg src={RMDBLogo} alt="rmdb-logo" /></Link>
            <TMDBLogoImg src={TMDBLogo} alt = "tmdb-logo"/>
        </Content>
    </Wrapper>)
}

export default Header;