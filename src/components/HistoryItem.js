import propTypes from "prop-types";
import React from "react";

const HistoryItem = ({ game, player }) => {
  let playerWon = "";
  // if player is present, find out if the player won in a player's match history, else return all recent games
  if (player) {
    playerWon = "game-draw";
    if (game.winner !== "draw") {
      if (
        (game.winner === "playerA" && game.playerA.name === player) ||
        (game.winner === "playerB" && game.playerB.name === player)
      ) {
        playerWon = "game-winner";
      } else {
        playerWon = "game-loser";
      }
    }
  }
  return (
    <div className={"history-item " + playerWon}>
      <div className="players-container">
        <div className="player-container">
          <p>
            <a href={`/player/${game.playerA.name}`}>{game.playerA.name}</a>
          </p>
          {game.winner === "playerB" && <span className="loser">LOSER</span>}
          {game.winner === "playerA" && <span className="winner">WINNER</span>}
          {game.winner === "draw" && <span className="draw">DRAW</span>}
        </div>
        <p className="vs">VS</p>
        <div className="player-container">
          <p>
            <a href={`/player/${game.playerB.name}`}>{game.playerB.name}</a>
          </p>
          {game.winner === "playerA" && <span className="loser">LOSER</span>}
          {game.winner === "playerB" && <span className="winner">WINNER</span>}
          {game.winner === "draw" && <span className="draw">DRAW</span>}
        </div>
      </div>
    </div>
  );
};

HistoryItem.propTypes = {
  game: propTypes.object.isRequired,
  player: propTypes.string,
};
export default HistoryItem;
