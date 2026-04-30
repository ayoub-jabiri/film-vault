import { RiCloseLine } from "@remixicon/react";

export default function AddMovie({ setShowPopup }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
            <div className="bg-[#30335B] p-8 w-full h-full rounded-md">
                <div className="flex justify-between items-center mb-4 text-white">
                    <h4 className="text-xl font-bold">Add New Movie</h4>
                    <button
                        className="cursor-pointer"
                        onClick={() => setShowPopup(false)}
                    >
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <form
                        className="flex justify-center flex-wrap gap-3"
                        onClick={handleSubmit}
                    >
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Title
                            </label>
                            <input
                                type="text"
                                placeholder="movie-title"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Description
                            </label>
                            <input
                                type="text"
                                placeholder="movie-description"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Release Year
                            </label>
                            <input
                                type="text"
                                placeholder="movie-release-year"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Category
                            </label>
                            <input
                                type="text"
                                placeholder="movie-category"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Rating
                            </label>
                            <input
                                type="text"
                                placeholder="movie-rating"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Director
                            </label>
                            <input
                                type="text"
                                placeholder="movie-director"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Main Actors
                            </label>
                            <input
                                type="text"
                                placeholder="movie-main-actors"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Image
                            </label>
                            <input
                                type="text"
                                placeholder="movie-image"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Hero Image
                            </label>
                            <input
                                type="text"
                                placeholder="movie-hero-image"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Trailer
                            </label>
                            <input
                                type="text"
                                placeholder="movie-trailer"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                            />
                        </div>
                        <div className="w-full flex justify-center items-center gap-5 mt-4">
                            <button className="bg-white w-[130px] border py-2 rounded-sm cursor-pointer">
                                Add Movie
                            </button>
                            <button className="bg-[#1B1845] w-[130px] text-white border border-white py-2 rounded-sm cursor-pointer">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
