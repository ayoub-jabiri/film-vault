import "./App.css";
// import movies from "./assets/data/movies.json";
import MoviesSection from "./components/movies/MoviesSection";
import LandingSection from "./components/LandingSection";
import { useState } from "react";

function App() {
    // localStorage.setItem("movies", JSON.stringify(movies));
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    const [, forceUpdate] = useState();

    return (
        <>
            <LandingSection movies={movies} forceUpdate={forceUpdate} />
            <MoviesSection movies={movies} forceUpdate={forceUpdate} />
        </>
    );
}

export default App;
