export default function MovieCard({ movie }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="relative w-[80%] border border-white rounded-md overflow-auto">
                <span className="absolute top-2 right-2 bg-[#ddd] text-black px-2 rounded-md border">
                    {movie.rating}
                </span>
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-[225px]"
                />
                <div id="movie-info" className="p-4">
                    <h3 className="text-xl font-bold">{movie.title}</h3>
                    <span className="text-sm">{movie.gender}</span>
                    <button className="block bg-transparent text-white text-sm px-4 py-2 mt-2 mx-auto border border-white rounded-md cursor-pointer">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
