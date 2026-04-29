import { RiArrowRightSLine, RiStarFill } from "@remixicon/react";
import MovieDetails from "../movies/MovieDetails";

export default function HeroSection({ movie }) {
    function showDetails() {
        document.getElementById(`movie-hero-${movie.id}`).style.scale = "1";
    }

    return (
        <section className="container relative text-white h-[calc(100%-72px)] flex flex-col justify-center gap-3">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="w-[50%]">{movie.description}</p>
            <div className="text-sm">
                <span>{movie.gender}</span> • <span>{movie.releaseYear}</span> •{" "}
                <span className="flex items-center">
                    <RiStarFill className="w-[11px]" />{" "}
                    <span>{`${movie.rating}/5`}</span>
                </span>
            </div>
            <button
                className="flex items-center bg-transparent text-white text-sm w-fit border border-white hover:bg-white hover:text-black px-4 py-2 rounded-3xl cursor-pointer"
                style={{ transition: "0.3s" }}
                onClick={showDetails}
            >
                <span>View Details</span> <RiArrowRightSLine />
            </button>
            <MovieDetails section={"hero"} movie={movie} className="111" />
        </section>
    );
}
