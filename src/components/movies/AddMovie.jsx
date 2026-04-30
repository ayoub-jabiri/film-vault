import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";

export default function AddMovie({ setShowPopup }) {
    const [formValues, setFormValues] = useState({
        id: 1,
        title: "",
        description: "",
        releaseYear: "",
        category: "",
        director: "",
        mainActors: [],
        image: "",
        heroImage: "",
        trailer: "",
        rating: "",
    });

    function addNewMovie() {
        let validData = true;
        for (const value in formValues) {
            if (!formValues[value]) {
                validData = false;
            } else {
                if (typeof formValues[value] == "object") {
                    if (!formValues.length) {
                        validData = false;
                    }
                }
            }
        }

        if (validData) {
            const finalData = {
                ...formValues,
                id: Date.now(),
                mainActors: formValues.mainActors.split(" "),
            };
            const newMovies = [
                ...JSON.parse(localStorage.getItem("movies")),
                finalData,
            ];

            localStorage.setItem("movies", JSON.stringify(newMovies));

            setShowPopup(false);
        }
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
                        onClick={(e) => e.preventDefault()}
                    >
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Title
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-title"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.title}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        title: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Description
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-description"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.description}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        description: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Release Year
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-release-year"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.releaseYear}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        releaseYear: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Category
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-category"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.category}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        category: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Rating
                            </label>
                            <input
                                required
                                type="number"
                                min="0"
                                max="5"
                                placeholder="movie-rating"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.rating}
                                onKeyDown={(e) => e.preventDefault()}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        rating: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Director
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-director"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.director}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        director: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Main Actors
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-main-actors"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.mainActors}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        mainActors: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Image
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-image"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.image}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        image: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Hero Image
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-hero-image"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.heroImage}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        heroImage: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-[calc(100%/3.5)]">
                            <label className="block text-white mb-2">
                                Movie Trailer
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="movie-trailer"
                                className="bg-[#1B1845] border border-[#777] text-[#777] w-[250px] px-3 p-2 rounded-sm"
                                value={formValues.trailer}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        trailer: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center gap-5 mt-4">
                            <button
                                className="bg-white w-[130px] border py-2 rounded-sm cursor-pointer"
                                onClick={addNewMovie}
                            >
                                Add Movie
                            </button>
                            <button
                                className="bg-[#1B1845] w-[130px] text-white border border-white py-2 rounded-sm cursor-pointer"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
