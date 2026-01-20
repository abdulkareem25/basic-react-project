
const MoviesSection = ({ movies, toggleFavorite }) => {

    const handleClick = (e) => {
        const card = e.target.closest('.movie-card');
        const index = Number(card.dataset.index);

        toggleFavorite(index);
    }

    return (
        <section className="movies-section">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} data-index={movie.id} className="movie-card">
                        <div className="movie-poster">
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-year">{movie.year}</p>
                        </div>
                        <div className="favorite">
                            <button
                                onClick={(e) => handleClick(e)}
                                className={movie.isFavorite === true ? "favorite-btn fav" : "favorite-btn"}
                            >♥</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MoviesSection
