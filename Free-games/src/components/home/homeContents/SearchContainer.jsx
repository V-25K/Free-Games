import React, { useState } from "react";

function SearchContainer({ onSearch, onClick }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <section className="search-section">
      <form id="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          id="search-input"
          placeholder="Enter Game Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="browse-container">
        <button className="browseBtn" onClick={onClick}>
          Filter
        </button>
      </div>
      
    </section>
  );
}

export default SearchContainer;
