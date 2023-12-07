import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";
// here axios == axios from the axios.js
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

let base_url = "http://image.tmdb.org/t/p/w500";

function Row(props) {
  let { title, fetchUrl, isLargeRow } = props;
  let [movies, setMovies] = useState([]);

  let [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      // console.log("fetchUrl:", fetchUrl);
      let request = await axios.get(fetchUrl);
      // the request variable: is the response of the fetching
      // console.log(fetchUrl);
      // console.log(request);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  let handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert("Sorry, There is no trailer for this movie"));
    }
  };
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => {
                handleTrailer(movie);
              }}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
        ;
      </div>
      <div className="trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
