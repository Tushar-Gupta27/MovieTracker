import React from "react";
import * as config from "../config";
import Grid from "./Grid/Grid";
import { Spinner } from "./Spinner/Spinner";
import NoImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

function Movie({ match }) {
  var movieId = match.params.movieId;

  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);

  if (loading) return null;
  if (error) return <div>Something went Wrong !!!</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        revenue={movie.revenue}
        budget={movie.budget}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => {
          return (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${config.IMAGE_BASE_URL}${config.POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          );
        })}
      </Grid>
    </>
  );
}

export default Movie;
