import MoviesSection from "./MoviesSection"
import SearchSection from "./SearchSection"
import { useContext } from "react"
import { MoviesContext } from "../contexts/MoviesProvider"

const Main = () => {
    const movies = useContext(MoviesContext);

    return (
        <main className="main-content">
            <SearchSection />
            <MoviesSection movies={movies} />
        </main>
    )
}

export default Main
