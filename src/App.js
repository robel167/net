import "./App.css";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
// import requests from "./requests";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* <Row
        title="netflixOriginal"
        fetchUrl={requests.netflixOriginal}
        isLargeRow
      /> */}
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Animations" fetchUrl={requests.fetchAnimations} />
      <Row title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      {/* <Row title="History" fetchUrl={requests.fetchHistory} /> */}
    </div>
  );
}

export default App;
