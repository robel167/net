let API_KEY = "6760580642a9043289e9d1add81812ad";

// let requests = {
// fetchTrending: `/trending/movie/week?language=en-US&api_key=${API_KEY}`,
// fetchAnimations:
//   "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=API_KEY",
// fetchTopRatedMovies:
//   "/movie/top_rated?language=en-US&page=1&api_key= API_KEY",
// fetchActionMovies:
//   "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&api_key=API_KEY",
// fetchHorror:
//   "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27&api_key=API_KEY",
// fetchDocumentaries:
//   "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99&api_key=API_KEY",
// fetchHistory:
//   "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=36&api_key=API_KEY",
// };

const requests = {
  netflixOriginal: `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213&api_key=${API_KEY}`,
  fetchTrending: "/trending/movie/week?language=en-US&api_key=" + API_KEY,
  fetchAnimations: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=${API_KEY}`,
  fetchTopRatedMovies: `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  fetchActionMovies: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&api_key=${API_KEY}`,
  fetchHorror: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27&api_key=${API_KEY}`,
  fetchAdventure: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12&api_key=${API_KEY}`,
  fetchHistory: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=36&api_key=${API_KEY}`,
};

export default requests;
//dont forget exporting
