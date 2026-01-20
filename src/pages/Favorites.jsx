import { useState, useEffect } from "react";
import Header from "../components/Header"
import MoviesSection from "../components/MoviesSection"

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites([
            { id: 1, title: "The Terminator", year: 1984, poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg" },
            { id: 2, title: "Terminator 2: Judgment Day", year: 1991, poster: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg" },
            { id: 3, title: "Inception", year: 2010, poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
            { id: 4, title: "The Dark Knight", year: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
            { id: 5, title: "Blade Runner", year: 1982, poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg" },
            { id: 6, title: "Terminator Salvation", year: 2009, poster: "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg" },
            { id: 7, title: "Interstellar", year: 2014, poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" }
        ])
    }, []);

    return (
        <div className="favorites-page">
            <Header />
            <h1>Favorite Movies</h1>
            <MoviesSection movies={favorites} />
        </div>
    )
}

export default Favorites
