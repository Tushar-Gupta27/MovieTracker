import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumbnail-styles";

function Thumbnail({ image, movieId, clickable, boxShadow }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/MovieTracker/movie/${movieId}`}>
          <Image src={image} alt="movie-thumb" boxShadow={boxShadow} />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" boxShadow={boxShadow} />
      )}
    </div>
  );
}

export default Thumbnail;
