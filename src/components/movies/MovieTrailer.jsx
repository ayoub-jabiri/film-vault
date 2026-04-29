import { RiCloseLine } from "@remixicon/react";

export default function MovieTrailer({
    id,
    movieTrailer,
    setMovieTrailerValue,
}) {
    function hideTrailer() {
        document.getElementById(id).style.display = "none";
        setMovieTrailerValue(null);
    }

    return (
        <div
            id={id}
            className="fixed top-0 left-0 z-50 w-screen h-screen hidden justify-center items-center"
        >
            <div className="bg-black p-8 w-full h-full rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold">Movie Trailer</h4>
                    <button className="cursor-pointer" onClick={hideTrailer}>
                        <RiCloseLine />
                    </button>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <iframe
                        width="560"
                        height="315"
                        src={movieTrailer}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; unload"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
