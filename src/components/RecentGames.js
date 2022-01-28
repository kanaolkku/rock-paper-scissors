import React from "react";
import HistoryItem from "./HistoryItem";

const RecentGames = ({ recentGames, player }) => {
  return (
    <div className="recent-games">
      <h2>Recent games</h2>
      <div className="recent-games-container">
        {recentGames.map((game, key) => <HistoryItem player={player} game={game} key={key} />)}
      </div>
    </div>
  )
}

export default RecentGames;
