import { RiCloseLine, RiPlayFill, RiStarFill } from "@remixicon/react";
import MovieTrailer from "./MovieTrailer";
import { useState } from "react";
import UpdateMovie from "./UpdateMovie";

export default function MovieDetails({ setShowDetails, forceUpdate, movie }) {
    const [showTrailer, setShowTrailer] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    function hideDetails() {
        document.getElementById("movie-details").style.scale = "0";

        setTimeout(() => {
            setShowDetails(false);
        }, 300);
    }

    function deleteMovie() {
        const movies = JSON.parse(localStorage.getItem("movies"));
        const currentMovieIndex = movies.findIndex((el) => el.id == movie.id);

        movies.splice(currentMovieIndex, 1);
        localStorage.setItem("movies", JSON.stringify(movies));

        hideDetails();
        forceUpdate({});
    }

    return (
        <div
            id="movie-details"
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
                        className="w-75 h-80 rounded-md"
                    />
                    <div className="w-[50%]">
                        <h5 className="text-2xl font-bold whitespace-nowrap overflow-hidden">
                            {movie.title}
                        </h5>
                        <p className="text-[#ddd] mb-2">{movie.description}</p>
                        <span className="block text-[#ddd]">
                            Release Year: {movie.releaseYear}
                        </span>
                        <span className="block text-[#ddd]">
                            Director: {movie.director}
                        </span>
                        <span className="block text-[#ddd]">
                            Main Actors: {movie.mainActors.join(", ")}
                        </span>
                        <div className="flex items-center gap-1 text-[#ddd]">
                            <span>Rating: </span>
                            <span className="flex items-center gap-1">
                                <RiStarFill className="w-[16px] text-[#FFC107]" />
                                <span>{`${movie.rating}/5`}</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                className="flex justify-center items-center bg-white text-sm text-black w-[140px] py-3 mt-4 rounded-md cursor-pointer"
                                onClick={() => setShowTrailer(true)}
                            >
                                <span>Watch Trailer</span> <RiPlayFill />
                            </button>
                            <button
                                className="bg-[#2196F3] text-sm text-white w-[140px] py-3 mt-4 rounded-md cursor-pointer"
                                onClick={() => setShowPopup(true)}
                            >
                                Update
                            </button>
                            <button
                                className="bg-[#F44336] text-sm text-white w-[140px] py-3 mt-4 rounded-md cursor-pointer"
                                onClick={deleteMovie}
                            >
                                Delete
                            </button>
                        </div>
                        {showTrailer && (
                            <MovieTrailer
                                movieTrailer={movie.trailer}
                                setShowTrailer={setShowTrailer}
                            />
                        )}
                        {showPopup && (
                            <UpdateMovie
                                setShowPopup={setShowPopup}
                                movie={movie}
                                setShowDetails={setShowDetails}
                                forceUpdate={forceUpdate}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
