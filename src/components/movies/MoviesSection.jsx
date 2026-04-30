import TopMovies from "./TopMovies";
import MoviesList from "./MoviesList";

export default function MoviesSection({ movies, forceUpdate }) {
    return (
        <section className="bg-[#111025] py-10 text-white">
            <div className="container">
                <TopMovies movies={movies} forceUpdate={forceUpdate} />
                <MoviesList movies={movies} forceUpdate={forceUpdate} />
            </div>
        </section>
    );
}
