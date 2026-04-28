import { RiCloseLine, RiPlayFill } from "@remixicon/react";

export default function MovieDetails({ section, movie }) {
    function hideDetails() {
        document.getElementById(`movie-${section}-${movie.id}`).style.scale =
            "0";
    }

    return (
        <div
            id={`movie-${section}-${movie.id}`}
            className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center scale-0"
            style={{ transition: "scale 0.3s" }}
        >
            <div className="bg-[#30335B] p-8 w-[80%] rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold">Movie Details</h4>
                    <button className="cursor-pointer" onClick={hideDetails}>
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-[300px] h-[300px] rounded-md"
                    />
                    <div className="w-[50%]">
                        <h5 className="text-2xl font-bold whitespace-nowrap overflow-hidden">
                            {movie.title}
                        </h5>
                        <p className="mb-2">{movie.description}</p>
                        <span className="block text-[#ddd]">
                            Release Year: {movie.releaseYear}
                        </span>
                        <span className="block text-[#ddd]">
                            Director: {movie.director}
                        </span>
                        <span className="block text-[#ddd]">
                            Main Actors: {movie.mainActors.join(", ")}
                        </span>
                        <span className="block text-[#ddd]">
                            Rating: {`${movie.rating}/5`}
                        </span>
                        <button className="flex items-center bg-white text-sm text-black border border-white px-4 py-3 mt-4 rounded-3xl cursor-pointer">
                            <span>Watch Trailer</span> <RiPlayFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
