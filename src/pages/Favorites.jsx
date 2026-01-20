import { useContext } from "react";
import Header from "../components/Header"
import MoviesSection from "../components/MoviesSection"
import { MoviesContext } from "../contexts/MoviesProvider"

const Favorites = () => {
    const { movies, toggleFavorite } = useContext(MoviesContext);

    const favorites = movies.filter(movie => movie.isFavorite);

    return (
        <div className="favorites-page">
            <Header />
            <h1>Favorite Movies</h1>
            <MoviesSection movies={favorites} toggleFavorite={toggleFavorite} />
        </div>
    )
}

export default Favorites
