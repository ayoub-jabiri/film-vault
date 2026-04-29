import "./App.css";
// import movies from "./assets/data/movies.json";
import AppHeader from "./components/layout/AppHeader";
import HeroSection from "./components/hero/HeroSection";
import MoviesSection from "./components/movies/MoviesSection";
import { useState } from "react";

function App() {
    // localStorage.setItem("movies", JSON.stringify(movies));
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem("movies")) || []
    );

    return (
        <>
            <main
                id="hero"
                className="bg-[url('/hero.png')] bg-cover h-screen relative"
            >
                <div
                    id="overlay"
                    className="bg-[#00000054] absolute top-0 left-0 w-full h-full"
                ></div>
                <AppHeader />
                <HeroSection movie={movies[0]} />
            </main>
            <MoviesSection movies={movies} />
        </>
    );
}

export default App;
