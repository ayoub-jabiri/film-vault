export default function MovieCard({ movie }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-[80%] border border-white rounded-md overflow-auto">
                <img src={movie.image} alt={movie.title} />
                <div id="movie-info" className="p-4">
                    <h3>{movie.title}</h3>
                </div>
            </div>
        </div>
    );
}
