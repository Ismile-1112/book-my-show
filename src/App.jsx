import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.Page";
import Plays from "./pages/Plays.page";
import Sports from "./pages/Sports.page";
import Events from "./pages/Events.page";
import Activities from "./pages/Activities.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "353c67927029362f9052e96ec1e86321";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
      <DefaultHOC path="/sports" exact component={Sports} />
      <DefaultHOC path="/events" exact component={Events} />
      <DefaultHOC path="/activities" exact component={Activities} />
    </>
  );
}

export default App;
