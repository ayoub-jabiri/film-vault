import HeroSection from "./hero/HeroSection";
import AppHeader from "./layout/AppHeader";

export default function LandingSection({ movies, forceUpdate }) {
    const topRating = Math.max(...movies.map((movie) => movie.rating));

    const topMovie = movies.filter((movie) => movie.rating == topRating)[0];
    return (
        <main
            id="hero"
            className="bg-[url('/hero.png')] bg-cover h-screen relative before:absolute before:bg-[#00000085] before:top-0 before:left-0 before:w-full before:h-full"
            style={{ backgroundImage: `url('${topMovie.heroImage}')` }}
        >
            <AppHeader />
            <HeroSection movie={topMovie} forceUpdate={forceUpdate} />
        </main>
    );
}
