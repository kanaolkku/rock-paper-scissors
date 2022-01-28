import React from "react";

const PlayerStats = ({ name, stats }) => {
  const { won, lost, draw } = stats.games;
  const totalGames = won + lost + draw;
  return (
    <div className="stats-container">
      <h2>{name}</h2>
      <h3>Games played: {totalGames} ({`W-${won} L-${lost} D-${draw}`})</h3>
      <h3>Win ratio: {stats.winratio.toFixed(2) * 100} %</h3>
      <h3>Favourite hand: {stats.favouriteHand}</h3>
    </div>
  )
}

export default PlayerStats