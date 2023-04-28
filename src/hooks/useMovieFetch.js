import React, { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        //getDirectors only
        const directors = credits.crew.filter((member) => {
          if (member.job === "Director") {
            return member;
          }
        });
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    const sessionState = isPersistedState(`${movieId}`);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      //returns so no more code can run
      return;
    }

    fetchData();
  }, [movieId]);

  //writing to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(`${movieId}`, JSON.stringify(state));
  }, [state, movieId]);

  return { state, loading, error };
};
