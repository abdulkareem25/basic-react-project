import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesProvider";

const SearchSection = () => {
    const { searchQuery, setSearchQuery } = useContext(MoviesContext);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <section className="search-section">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
        </section>
    )
}

export default SearchSection
