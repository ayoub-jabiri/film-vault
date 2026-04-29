import MovieCard from "./MovieCard";

export default function TopMovies({ movies }) {
    const topMoviesList = movies.map((el) => (
        <MovieCard key={el.id} movie={el} />
    ));
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">List of Top Movies</h2>
            <div className="grid grid-cols-12 gap-5">{topMoviesList}</div>
        </div>
    );
}
