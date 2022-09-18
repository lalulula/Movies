import {useState, useEffect} from "react";
import Movie from "./components/Movie";
const Home = () =>{
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //ASYNC function으로 대체한 부분
  // useEffect(()=>{
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
  //   ).then((response)=>response.json())
  //     .then((json)=>{
  //       setMovies(json.data.movies)
  //       setLoading(false)});
  //   },[])  
  const getMovies = async()=>{
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(()=>{
    getMovies();
  },[])
  console.log(movies);


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) =>(
            <Movie 
              key={movie.id}
              title = {movie.title}
              summary = {movie.summary}
              coverImg = {movie.medium_cover_image}
              genres ={movie.genres}
              />
            ))}
        </div>
        )}
    </div>
  );
}

export default Home;