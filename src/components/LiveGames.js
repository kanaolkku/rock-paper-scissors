import React, { useEffect, useState } from "react";
import LiveGame from "./LiveGame";

const LiveGames = ({ liveGames }) => {
  return (
    <div className="live-game-container">
      <h2 style={{ marginTop: "20px" }}>Live Games</h2>
      {liveGames.map((game, index) => <LiveGame game={game} key={index} />
      )}
    </div>
  )
}

export default LiveGames