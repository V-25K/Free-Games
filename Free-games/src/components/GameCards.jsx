import React from "react";

function GameCards({
  id,
  title,
  platform,
  thumbnail,
  game_url,
  short_description,
  genre,
}) {
  return (
    <div className="game-card-wrapper" key={id}>
      <a href={game_url} target="_blank">
        <div className="game-card-defaultContent">
          <img src={thumbnail} alt={title + "thumbnail"} />
          <h2>{title}</h2>
        </div>
        <div className="game-card-onHover" title="Click to visit the game page">
          <div>
            <p><span style={{color: "greenyellow"}}>Genre: </span> {genre}</p>
            <p><span style={{color: "greenyellow"}}>Platform: </span>{platform}</p>
          </div>
          <p style={{padding: 0, margin: 0, color: "Tomato", textDecoration: "underline"}}>Description</p>
          <p style={{overflow: "scroll", scrollbarWidth: "none"}}>{short_description}</p>
        </div>
      </a>
    </div>
  );
}

export default GameCards;
