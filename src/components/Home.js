
import React from "react";

//components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumbnail from "./Thumbnail/Thumbnail";
import Spinner from "./Spinner/Spinner"
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
//config
import * as config from "../config"
//image
import noImage from "../images/no_image.jpg"
//api
import API from "../API";
//hooks
import {useHomeFetch} from "../hooks/useHomeFetch"




function Home(){
    const {state,loading,error,setSearchTerm,search,setLoadingMore} = useHomeFetch();  //custom hooks
    console.log(state);

    if(error) return <div>Something is Wrong</div>
    return(
        <div>
        {state.results[0] && !search ? 
        <HeroImage 
        image={config.IMAGE_BASE_URL + config.BACKDROP_SIZE + state.results[0].backdrop_path}
        title={state.results[0].original_title} 
        text={state.results[0].overview} /> : null}

        <SearchBar setSearchTerm={setSearchTerm}/>

        <Grid header={search ? `Search Results` : "Popular Movies"}>
            {state.results.map((movie)=>{
                return(
                    <Thumbnail 
                        key={movie.id} 
                        clickable
                        boxShadow={true}
                        image={
                            movie.poster_path
                            ? config.IMAGE_BASE_URL + config.POSTER_SIZE + movie.poster_path
                            : noImage
                   } movieId = {movie.id} />
                   );
            })}
        </Grid>
        {loading ? <Spinner/> : null} 
        {state.page<state.total_pages && !loading ? <Button text="Load More" callback={()=>setLoadingMore(true)}/> : null }
        </div>
        )
}


export default Home;


