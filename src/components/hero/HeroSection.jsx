import { RiArrowRightSLine, RiStarFill } from "@remixicon/react";
import MovieDetails from "../movies/MovieDetails";
import { useState } from "react";

export default function HeroSection({ movie, forceUpdate }) {
    const [showDetails, setShowDetails] = useState(false);
    async function handleShowDetails() {
        await setShowDetails(true);
        document.getElementById(`movie-hero-${movie.id}`).style.scale = "1";
    }

    return (
        <section className="container relative text-white h-[calc(100%-72px)] flex flex-col justify-center gap-3">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="w-[50%]">{movie.description}</p>
            <div className="flex flex-col gap-1 text-sm">
                <div>
                    <span>Category: </span>
                    <span>{movie.category}</span>
                </div>
                <div>
                    <span>Release Year: </span>
                    <span>{movie.releaseYear}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>Rating: </span>
                    <span className="flex items-center gap-1">
                        <RiStarFill className="w-[16px] text-[#FFC107]" />
                        <span>{`${movie.rating}/5`}</span>
                    </span>
                </div>
            </div>
            <button
                className="flex items-center bg-transparent text-white text-sm w-fit border border-white hover:bg-white hover:text-black px-4 py-2 rounded-3xl cursor-pointer"
                style={{ transition: "0.3s" }}
                onClick={handleShowDetails}
            >
                <span>View Details</span> <RiArrowRightSLine />
            </button>
            {showDetails && (
                <MovieDetails
                    section={"hero"}
                    setShowDetails={setShowDetails}
                    forceUpdate={forceUpdate}
                    movie={movie}
                />
            )}
        </section>
    );
}
