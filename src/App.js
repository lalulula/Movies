import userEvent from "@testing-library/user-event";
import {useState, useEffect} from "react";

function App() {
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
      {loading?<h1>Loading...</h1>:null}
    </div>
  );
}

export default App;
