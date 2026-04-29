import { RiCloseLine } from "@remixicon/react";

export default function MovieTrailer({ movieTrailer, setShowTrailer }) {
    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center">
            <div className="bg-black p-8 w-full h-full rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold">Movie Trailer</h4>
                    <button
                        className="cursor-pointer"
                        onClick={() => setShowTrailer(false)}
                    >
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
