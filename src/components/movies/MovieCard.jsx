export default function MovieCard({ movie }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div
                className="relative w-[80%] mx-auto border border-white rounded-md overflow-auto hover:translate-y-[-10px]"
                style={{ transition: "translate 0.3s" }}
            >
                <span className="absolute top-2 right-2 bg-[#ddd] text-black px-2 rounded-md border">
                    {movie.rating}
                </span>
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-[200px]"
                />
                <div id="movie-info" className="p-4">
                    <h3
                        className="text-xl font-bold whitespace-nowrap overflow-hidden"
                        title={movie.title}
                    >
                        {movie.title.length <= 20
                            ? movie.title
                            : movie.title.slice(0, 20) + "..."}
                    </h3>
                    <span className="text-sm">{movie.gender}</span>
                    <button className="block bg-transparent text-white text-sm px-4 py-2 mt-2 mx-auto border border-white rounded-md cursor-pointer">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
