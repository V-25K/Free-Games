import React, { useState, useEffect } from "react";
import SearchContainer from "./homeContents/SearchContainer";
import MainContent from "./homeContents/MainContent";
import FilterComponent from "./homeContents/FilterComponent";

function Home() {
  const [games, setGames] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [uniqueGenre, setUniqueGenre] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [genreQuery, setGenreQuery] = useState("");
  const [platformQuery, setPlatformQuery] = useState("");
  const [url, setURL] = useState(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  const [hasGenre, setHasGenre] = useState(false);
  const [hasPlatform, setHasPlatform] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6b53654561msh949ef2ee3a5551ap1ba4c4jsna0d5d0b98a96",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setGames(result);

        const uniqueGenre = result.map((games) => games.genre); // Extract genres
        const uniqueGenreSet = new Set(uniqueGenre); // Convert to Set to get unique genres
        const uniqueGenreArray = Array.from(uniqueGenreSet); // Convert back to array
        setUniqueGenre(uniqueGenreArray);

        const uniquePlatform = result.map((games) => games.platform); // Extract genres
        const uniquePlatformSet = new Set(uniquePlatform); // Convert to Set to get unique genres
        const uniquePlatformArray = Array.from(uniquePlatformSet); // Convert back to array
        setPlatform(uniquePlatformArray);
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs only once after initial render

  function handleSearch(query) {
    if (query) {
      setSearchQuery(query);
      setGenreQuery("");
      setPlatformQuery("");
      setHasGenre(false);
      setHasPlatform(false);
    }
  }

  function handleGenre(genre) {
    if (genre) {
      setGenreQuery(genre);
      setSearchQuery("");
      setHasGenre(true);
      setURL(`https://www.freetogame.com/api/games?category=${genre}&platform=${platformQuery}`);
    }
  }

  function handlePlatform(platform) {
    if (platform) {
      setPlatformQuery(platform);
      setSearchQuery("");
      setHasPlatform(true);
      setURL(`https://www.freetogame.com/api/games?platform=${platform}&category=${genreQuery}`);
    }
  }

  function handleClick() {
    setShowFilter(!showFilter);
  }

  return (
    <>
      <SearchContainer onSearch={handleSearch} onClick={handleClick} />
      {showFilter && (
        <FilterComponent
          genre={uniqueGenre}
          platform={platform}
          onGenre={handleGenre}
          onPlatform={handlePlatform}
        />
      )}
      <MainContent
        games={games}
        searchQuery={searchQuery}
        genreQuery={genreQuery}
        platformQuery={platformQuery}
        hasGenre={hasGenre}
        hasPlatform={hasPlatform}
      />
    </>
  );
}

export default Home;
