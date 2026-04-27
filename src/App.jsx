import "./App.css";
import movies from "./assets/data/movies.json";
import AppHeader from "./components/layout/AppHeader";
import HeroSection from "./components/hero/HeroSection";
import MoviesSection from "./components/movies/MoviesSection";

function App() {
    return (
        <>
            <main
                id="hero"
                className="bg-[url('/hero.png')] bg-cover h-screen relative"
            >
                <div
                    id="overlay"
                    className="bg-[#00000033] absolute top-0 left-0 w-full h-full"
                ></div>
                <AppHeader />
                <HeroSection movie={movies[0]} />
            </main>
            <MoviesSection />
        </>
    );
}

export default App;
