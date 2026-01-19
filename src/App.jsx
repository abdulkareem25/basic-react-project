import React from 'react'

const App = () => {
  // Sample movie data - replace with your own logic
  const sampleMovies = [
    { id: 1, title: "Terminator Genisys", year: 2015, poster: "https://via.placeholder.com/200x300?text=Terminator+Genisys" },
    { id: 2, title: "The Terminator", year: 1984, poster: "https://via.placeholder.com/200x300?text=The+Terminator" },
    { id: 3, title: "Terminator 2: Judgment Day", year: 1991, poster: "https://via.placeholder.com/200x300?text=T2" },
    { id: 4, title: "South Terminal", year: 2019, poster: "https://via.placeholder.com/200x300?text=South+Terminal" },
    { id: 5, title: "Terminator: Dark Fate", year: 2019, poster: "https://via.placeholder.com/200x300?text=Dark+Fate" },
    { id: 6, title: "Terminator 3: Rise of the Machines", year: 2003, poster: "https://via.placeholder.com/200x300?text=T3" },
    { id: 7, title: "Angel Terminators", year: 2018, poster: "https://via.placeholder.com/200x300?text=Angel+Terminators" },
    { id: 8, title: "Terminator Salvation", year: 2009, poster: "https://via.placeholder.com/200x300?text=Salvation" },
    { id: 9, title: "Japanese Movie", year: 2020, poster: "https://via.placeholder.com/200x300?text=Japanese+Movie" },
    { id: 10, title: "Sci-Fi Action", year: 2021, poster: "https://via.placeholder.com/200x300?text=Sci-Fi+Action" },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">Movie App</div>
          <nav className="nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Favorites</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Search Section */}
        <section className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search movies..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </section>

        {/* Movies Grid */}
        <section className="movies-section">
          <div className="movies-grid">
            {sampleMovies.map((movie) => (
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
      </main>
    </div>
  )
}

export default App
