import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PlayerStats from "./PlayerStats";
import RecentGames from "./RecentGames";

const PlayerPage = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    games: { won: 0, lost: 0, draw: 0 },
    hands: { rock: 0, paper: 0, scissors: 0 },
  });
  const name = useParams().name;

  const checkGameResult = (game) => {
    if (game.winner === "draw") {
      return "draw";
    } else if (game[game.winner].name === name) {
      return "winner";
    } else {
      return "loser";
    }
  };

  const calculateStats = (gameArray) => {
    let won = 0;
    let lost = 0;
    let draw = 0;
    let rock = 0;
    let paper = 0;
    let scissors = 0;

    gameArray.forEach((game) => {
      const result = checkGameResult(game);
      switch (result) {
        case "loser":
          lost += 1;
          break;
        case "winner":
          won += 1;
          break;
        default:
          draw += 1;
          break;
      }

      const playedResult = checkHand(game);
      switch (playedResult) {
        case "ROCK":
          rock += 1;
          break;
        case "PAPER":
          paper += 1;
          break;
        default:
          scissors += 1;
          break;
      }
    });

    const winratio = won / (won + lost + draw);
    let favouriteHand = "";

    if (rock > paper && rock > scissors) {
      favouriteHand = "ROCK";
    } else if (paper > rock && paper > scissors) {
      favouriteHand = "PAPER";
    } else {
      favouriteHand = "SCISSORS";
    }

    setStats({
      games: { won, lost, draw },
      hands: { rock, paper, scissors },
      winratio,
      favouriteHand,
    });
  };

  const checkHand = (game) => {
    if (game.playerA.name === name) {
      return game.playerA.played;
    } else {
      return game.playerB.played;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/players/${name}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          calculateStats(data[0].games, name);
          setGames(data[0].games);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [name]);

  if (isLoading) {
    return (
      <div className="player-page">
        <h1>Loading...</h1>
        <p>(may run a little slowly after a server restart)</p>
      </div>
    );
  } else if (games.length < 1) {
    return (
      <div className="player-page">
        <h3>Could not find player with the name {name}</h3>
      </div>
    );
  } else {
    return (
      <div className="player-page">
        <PlayerStats name={name} stats={stats} />
        <RecentGames player={name} recentGames={games.slice(0, 20)} />
      </div>
    );
  }
};

export default PlayerPage;
