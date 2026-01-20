import { useContext } from "react"
import { MoviesContext } from "../contexts/MoviesProvider"

const MoviesSection = () => {
    const movies = useContext(MoviesContext);

    return (
        <section className="movies-section">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <div className="movie-poster">
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-year">{movie.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MoviesSection
