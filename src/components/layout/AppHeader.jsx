import { useState } from "react";
import { RiAddLine } from "@remixicon/react";
import AddMovie from "../movies/AddMovie";

export default function AppHeader() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <header className="py-5 relative">
            <div className="container flex justify-between items-center">
                <a href="/" className="text-xl font-bold">
                    <span className="text-white">Film</span>
                    <span className="text-[#2196F3]">Vault</span>
                </a>
                <button
                    className="bg-[#2196F3] text-white text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowPopup(true)}
                >
                    <RiAddLine />
                    <span>New Movie</span>
                </button>
                {showPopup && <AddMovie setShowPopup={setShowPopup} />}
            </div>
        </header>
    );
}
