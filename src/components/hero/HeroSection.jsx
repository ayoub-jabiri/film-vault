import { RiPlayFill, RiArrowRightSLine } from "@remixicon/react";
import MovieDetails from "../movies/MovieDetails";

export default function HeroSection({ movie }) {
    function showDetails() {
        document.getElementById(`movie-list-${movie.id}`).style.scale = "1";
    }

    return (
        <section className="container relative text-white h-[calc(100%-72px)] flex flex-col justify-center gap-3">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="w-[50%]">{movie.description}</p>
            <div className="text-sm">
                <span>{movie.gender}</span> • <span>{movie.releaseYear}</span> •{" "}
                <span>{`${movie.rating}/5`}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
                <button className="flex items-center bg-white text-black border border-white px-4 py-2 rounded-3xl cursor-pointer">
                    <span>Watch Trailer</span> <RiPlayFill />
                </button>
                <button
                    className="flex items-center bg-transparent text-white border border-white px-4 py-2 rounded-3xl cursor-pointer"
                    onClick={showDetails}
                >
                    <span>Details</span> <RiArrowRightSLine />
                </button>
            </div>
            <MovieDetails section={"hero"} movie={movie} />
        </section>
    );
}
