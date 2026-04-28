import MovieDetails from "./MovieDetails";

export default function MovieCard({ movie }) {
    function showDetails() {
        document.getElementById(`movie-list-${movie.id}`).style.scale = "1";
    }

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div
                className="relative w-[80%] mx-auto border border-[#30335B] hover:border-white rounded-md overflow-auto hover:translate-y-[-10px]"
                style={{ transition: "0.3s" }}
            >
                <span className="absolute top-2 right-2 bg-[#2196F3] text-white px-2 rounded-md border border-black">
                    {movie.rating}
                </span>
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-[200px]"
                />
                <div id="movie-info" className="p-4">
                    <h3
                        className="text-base font-bold whitespace-nowrap overflow-hidden"
                        title={movie.title}
                    >
                        {movie.title.length <= 20
                            ? movie.title
                            : movie.title.slice(0, 20) + "..."}
                    </h3>
                    <span className="text-sm text-[#ddd]">{movie.gender}</span>
                    <button
                        className="block bg-transparent text-white text-sm px-4 py-2 mt-2 mx-auto border border-white rounded-md cursor-pointer"
                        onClick={showDetails}
                    >
                        View Details
                    </button>
                </div>
            </div>
            <MovieDetails section={"list"} movie={movie} />
        </div>
    );
}
