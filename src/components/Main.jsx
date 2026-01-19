import MoviesSection from "./MoviesSection"
import SearchSection from "./SearchSection"

const Main = () => {
    return (
        <main className="main-content">
            {/* Search Section */}
            <SearchSection />

            {/* Movies Grid */}
            <MoviesSection />
        </main>
    )
}

export default Main
