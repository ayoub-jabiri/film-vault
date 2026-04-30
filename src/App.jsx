import "./App.css";
// import movies from "./assets/data/movies.json";
import MoviesSection from "./components/movies/MoviesSection";
import LandingSection from "./components/LandingSection";

function App() {
    // localStorage.setItem("movies", JSON.stringify(movies));
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    return (
        <>
            <LandingSection movies={movies} />
            <MoviesSection movies={movies} />
        </>
    );
}

export default App;
