import MovieCard from "./MovieCard";
import topMovies from "../../assets/data/top-movies.json";

export default function TopMovies() {
    const topMoviesList = topMovies.map((el) => <MovieCard movie={el} />);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">List of Top Movies</h2>
            <div className="grid grid-cols-12 gap-5">{topMoviesList}</div>
        </div>
    );
}
