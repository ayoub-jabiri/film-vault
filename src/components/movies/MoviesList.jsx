import MovieCard from "./MovieCard";
import movies from "../../assets/data/movies.json";

export default function MoviesList() {
    const moviesList = movies.map((el) => <MovieCard movie={el} />);
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">List of Movies</h2>
            <div className="grid grid-cols-12 gap-5">{moviesList}</div>
        </div>
    );
}
