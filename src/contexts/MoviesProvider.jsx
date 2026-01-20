import { useState, createContext, useEffect } from 'react'

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies([
            { id: 1, title: "The Terminator", year: 1984, poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg" },
            { id: 2, title: "Terminator 2: Judgment Day", year: 1991, poster: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg" },
            { id: 3, title: "Inception", year: 2010, poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
            { id: 4, title: "The Dark Knight", year: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
            { id: 5, title: "Blade Runner", year: 1982, poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg" },
            { id: 6, title: "Terminator Salvation", year: 2009, poster: "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg" },
            { id: 7, title: "Interstellar", year: 2014, poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
            { id: 8, title: "The Matrix", year: 1999, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
            { id: 9, title: "Avatar", year: 2009, poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg" },
            { id: 10, title: "Avatar: The Way of Water", year: 2022, poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
            { id: 11, title: "Mad Max: Fury Road", year: 2015, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
            { id: 12, title: "Blade Runner 2049", year: 2017, poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" },
            { id: 13, title: "Dune", year: 2021, poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
            { id: 14, title: "Dune: Part Two", year: 2024, poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
            { id: 15, title: "John Wick", year: 2014, poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
            { id: 16, title: "John Wick: Chapter 4", year: 2023, poster: "https://image.tmdb.org/t/p/w500/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg" },
            { id: 17, title: "The Batman", year: 2022, poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
            { id: 18, title: "Avengers: Endgame", year: 2019, poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
            { id: 19, title: "Iron Man", year: 2008, poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
            { id: 20, title: "Guardians of the Galaxy", year: 2014, poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" }
        ]);
    }, []);

    return (
        <MoviesContext.Provider value={movies} >
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider
