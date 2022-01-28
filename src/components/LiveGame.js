import propTypes from "prop-types";
import React from "react";
const LiveGame = ({ game }) => {
  if (game.ended === false) {
    return (
      <div className="live-game">
        <div className="players-container">
          <div className="player-container">
            <p>
              <a href={`/player/${game.playerA.name}`}>{game.playerA.name}</a>
            </p>
          </div>
          <p className="vs">VS</p>
          <div className="player-container">
            <p>
              <a href={`/player/${game.playerB.name}`}>{game.playerB.name}</a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="live-game">
        <div className="players-container">
          <div className="player-container">
            <p>
              <a href={`/player/${game.playerA.name}`}>{game.playerA.name}</a>
            </p>
            {game.winner === "playerB" && <span className="loser">LOSER</span>}
            {game.winner === "playerA" && (
              <span className="winner">WINNER</span>
            )}
            {game.winner === "draw" && <span className="draw">DRAW</span>}
          </div>
          <p className="vs">VS</p>
          <div className="player-container">
            <p>
              <a href={`/player/${game.playerB.name}`}>{game.playerB.name}</a>
            </p>
            {game.winner === "playerA" && <span className="loser">LOSER</span>}
            {game.winner === "playerB" && (
              <span className="winner">WINNER</span>
            )}
            {game.winner === "draw" && <span className="draw">DRAW</span>}
          </div>
        </div>
      </div>
    );
  }
};

LiveGame.propTypes = {
  game: propTypes.object.isRequired,
};

export default LiveGame;
