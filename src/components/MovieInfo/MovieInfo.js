import React from "react";
import {Wrapper,Content,Text} from "./MovieInfo-styles"
import * as config from "../../config"
import NoImage from "../../images/no_image.jpg"
import Thumbnail from "../Thumbnail/Thumbnail";

function MovieInfo({movie}){

return(
<Wrapper backdrop = {movie.backdrop_path}>
    <Content>
        <Thumbnail image={movie.poster_path 
        ? `${config.IMAGE_BASE_URL}${config.POSTER_SIZE}${movie.poster_path}`:NoImage}
        clickable={false}
        alt="movie-thumb"></Thumbnail>

        <Text>
            <h1>{movie.title}</h1>
            <p className="tag">{movie.tagline}</p>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>
            <div className="rating-directors">
                <div>
                    <h3>RATING</h3>
                    <div className="score">{movie.vote_average}</div>
                </div>
                <div className="genre">
                    <h3>Genre</h3>
                    <div>{movie.genres.map((genre)=>{
                        return(<p key={genre.id}>{`${genre.name}`}</p>)
                    })}</div>
                </div>
                <div className="director">
                    <h3>Director{movie.directors.length>1?"s":""}</h3>
                    {movie.directors.map((director)=>{
                        return(
                            <p  key={director.credit_id}>{director.name}</p>
                        )
                    })}
                </div>

            </div>
        </Text>
    </Content>
</Wrapper>)

}


export default MovieInfo;