import TopMovies from "./TopMovies";
import MoviesList from "./MoviesList";

export default function MoviesSection() {
    return (
        <section className="bg-[#111025] py-10 text-white">
            <div className="container">
                <TopMovies />
                <MoviesList />
            </div>
        </section>
    );
}
