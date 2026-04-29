import { useState } from "react";
import MovieCard from "./MovieCard";
import MoviesFilter from "./MoviesFilter";

export default function MoviesList({ movies }) {
    const categories = movies.map((el) => el.category);

    // Filter options
    const [currentFilter, setCurrentFilter] = useState({
        category: "All",
        rating: "All",
    });

    // Filtering the movies
    let filteredMovies = [];

    // Category Filtering
    if (currentFilter.category == "All") {
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter(
            (movie) => movie.category == currentFilter.category
        );
    }

    // Rating Filtering
    if (currentFilter.rating != "All") {
        filteredMovies = filteredMovies.filter(
            (movie) => movie.rating == currentFilter.rating
        );
    }

    const moviesList = filteredMovies.map((el) => (
        <MovieCard key={el.id} movie={el} />
    ));

    return (
        <div className="mt-15">
            <h2 className="text-2xl font-bold mb-6">List of Movies</h2>
            <MoviesFilter
                categories={categories}
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
            />
            <div className="grid grid-cols-12 gap-5">{moviesList}</div>
        </div>
    );
}
