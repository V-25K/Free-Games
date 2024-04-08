import React, { useState } from "react";
function FilterComponent({ genre, platform, onGenre, onPlatform }) {
  const [genreQuery, setGenreQuery] = useState('')
  const [platformQuery, setPlatformQuery] = useState('')

  function handleSubmit(){
    onGenre(genreQuery)
    onPlatform(platformQuery)
  }

  return (
    <div className="filterBy-container">
      <div className="filter-title">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3839/3839020.png"
          width={20}
        />
        <h4>Filter by: </h4>
      </div>
      <div>
        <label htmlFor="genre-selection"> Genre: </label>
        <select id="genre-selection" onChange={(e) => setGenreQuery(e.target.value)}>
          <option value="">N/A</option>
          {genre.map((genreOption) => (
            <option value={genreOption} key={genreOption}>
              {genreOption}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="platform-selection">Platform: </label>
        <select id="platform-selection" onChange={(e) => setPlatformQuery(e.target.value)}>
          <option value="">N/A</option>
          {platform.map((platformOption) => (
            <option value={platformOption} key={platformOption}>
              {platformOption}
            </option>
          ))}
        </select>
      </div>
      <div className="submitBtn" onClick={handleSubmit}>
        <button type="submit">Submit</button>
      </div>
      {/* You can add more filter options here */}
    </div>
  );
}

export default FilterComponent;
