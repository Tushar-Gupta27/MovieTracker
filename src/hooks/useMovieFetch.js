import React,{useState,useEffect} from "react";
import API from "../API"


export const useMovieFetch = (movieId)=>{
    const [state,setState] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(()=>{
       const fetchData = async ()=>{
           try{
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            //getDirectors only
            const directors = credits.crew.filter((member)=>{
                if(member.job === "Director"){
                    return member;
                }
            })
            setState({
                ...movie,
                actors:credits.cast,
                directors
            })


           }catch(error){
               setError(true);
           }
           setLoading(false);
       } 
       fetchData();
    },[movieId])


    return ({state,loading,error});
}

