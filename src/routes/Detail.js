import { useEffect, useState,  } from "react";
import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";

const Detail = () =>{
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(()=>{
    getDetails();
  },[]); 

  const getDetails = async () => {
    const json =  await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)).json();
    setMovieDetails(json.data.movie);
  };
  console.log(movieDetails)

  if(!movieDetails){
    return <h1>Loading...</h1>
  }else{

    return (
    <React.Fragment>
      <h1>Detail</h1>
      <span>{movieDetails.title}</span>
      <img src={movieDetails.medium_cover_image} alt="title" />
      <span>{movieDetails.year}</span>
      <span>{movieDetails.url}</span>
      <span>{movieDetails.rating}</span>
      <span>{movieDetails.runtime}</span>
      <span>{movieDetails.description_full}</span>      
    </React.Fragment>
  );
  }
  }

export default Detail;