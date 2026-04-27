import { RiAddLine } from "@remixicon/react";

export default function AppHeader() {
    return (
        <header className="py-5">
            <div className="container flex justify-between items-center">
                <a href="/" className="text-xl font-bold">
                    <span className="text-white">Film</span>
                    <span className="text-[#2196F3]">Vault</span>
                </a>
                <button className="bg-[#2196F3] text-white text-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <RiAddLine />
                    <span>New Movie</span>
                </button>
            </div>
        </header>
    );
}
