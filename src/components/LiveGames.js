import React from "react";
import LiveGame from "./LiveGame";
import propTypes from "prop-types";

const LiveGames = ({ liveGames }) => {
  return (
    <div className="live-game-container">
      <h2 style={{ marginTop: "20px" }}>Live Games</h2>
      {liveGames.map((game, index) => (
        <LiveGame game={game} key={index} />
      ))}
    </div>
  );
};

LiveGames.propTypes = {
  liveGames: propTypes.object,
};
export default LiveGames;
