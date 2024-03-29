import React, { useState, useEffect, useRef } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

const initial = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [search, setSearchTerm] = useState("");
  const [state, setState] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setLoadingMore] = useState(false);

  // console.log(search);
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setLoading(true);
      setError(false);
      const movies = await API.fetchMovies(searchTerm, page);
      // console.log(movies);
      if (movies.results) {
        setState((prev) => {
          return {
            ...movies,
            results:
              page > 1
                ? [...prev.results, ...movies.results]
                : [...movies.results],
          };
        });
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  //initial and search
  useEffect(() => {
    //if not in search then check for storage
    if (!search) {
      const persistedState = isPersistedState("homeState");
      //if stored values -> set that to showcase
      if (persistedState) {
        setState(persistedState);
        return;
      }
    }

    setState(initial);
    fetchMovies(1, search);
  }, [search]);

  useEffect(() => {
    if (!isLoadingMore) return;
    else {
      fetchMovies(state.page + 1, search);
      setLoadingMore(false);
    }
  }, [isLoadingMore]);
  //we need another use effect as the first useEffect will need to load the first page of movie everytime

  //writing to the session storage -> when state or searchTerm changes
  // we dont want to save searched state
  useEffect(() => {
    if (!search) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [search, state]);

  return { state, loading, error, setSearchTerm, search, setLoadingMore };
};
