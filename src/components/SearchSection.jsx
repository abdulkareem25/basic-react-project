const SearchSection = () => {
    return (
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
    )
}

export default SearchSection
