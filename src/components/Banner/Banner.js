import React from "react";
import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Banner() {
    let [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let request = await axios.get(requests.fetchTrending);
            // the request variable: is the response of the fetching
            // console.log(request.data.results);
            setMovies(
                request?.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );

            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie.title || movie.original_name}
                </h1>
                <div className="banner_buttons">
                    <button type="button" className="banner_button">
                        Play <FontAwesomeIcon icon={faPlay} className="icon" />
                    </button>
                    <button type="button" className="banner_button">
                        My List
                    </button>
                </div>
                <div className="banner_description">
                    {truncate(movie?.overview, 150)}
                </div>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    );
}
export default Banner;
