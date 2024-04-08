import React from "react";
import GameCards from "../../GameCards";

function MainContent({
  games,
  searchQuery,
  genreQuery,
  platformQuery,
  hasGenre,
  hasPlatform,
}) {
  const filteredGames = games.filter((game) => {
    if (hasGenre && !hasPlatform ) {
      const includesGenreQuery = game.genre === genreQuery;
      return includesGenreQuery;
    } else if (hasPlatform && !hasGenre) {
      const includesPlatformQuery = game.platform === platformQuery;
      return includesPlatformQuery;
    } else if(hasGenre && hasPlatform){
      const includesGenreQuery = (game.genre === genreQuery && game.platform === platformQuery);
      return includesGenreQuery;
    }else{
      const includesSearchQuery = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      return includesSearchQuery
    }
    
  });
  return (
    <section className="games-container">
      {filteredGames.map((game) => (
        <GameCards
          key={game.id}
          title={game.title}
          platform={game.platform}
          thumbnail={game.thumbnail}
          game_url={game.game_url}
          short_description={game.short_description}
          genre={game.genre}
        />
      ))}
    </section>
  );
}

export default MainContent;
