import MovieCard from "./MovieCard";

export default function TopMovies({ movies, forceUpdate }) {
    const topRating = Math.max(...movies.map((movie) => movie.rating));

    const topMovies = movies
        .filter((movie) => movie.rating == topRating)
        .slice(0, 3);

    const topMoviesList = topMovies.map((el) => (
        <MovieCard key={el.id} movie={el} forceUpdate={forceUpdate} />
    ));
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">List of Top Movies</h2>
            <div className="grid max-md:grid-cols-12 min-lg:grid-cols-9 gap-5 max-lg:max-w-[400px] max-lg:mx-auto">
                {topMoviesList}
            </div>
        </div>
    );
}
