import MoviesSection from "./MoviesSection"
import SearchSection from "./SearchSection"
import { useContext } from "react"
import { MoviesContext } from "../contexts/MoviesProvider"

const Main = () => {
    const { filteredMovies, toggleFavorite } = useContext(MoviesContext);

    return (
        <main className="main-content">
            <SearchSection />
            <MoviesSection movies={filteredMovies} toggleFavorite={toggleFavorite} />
        </main>
    )
}

export default Main
