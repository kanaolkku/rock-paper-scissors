import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import LiveGames from "./components/LiveGames";
import { io } from "socket.io-client";
import '../src/styles.css'
import RecentGames from "./components/RecentGames";
import Searchbar from "./components/Searchbar";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";
import Navbar from "./components/Navbar";
const socket = io("ws://localhost:3000");


function App() {

  const [livegames, setLiveGames] = useState([]);
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected")
    });

    socket.on('live games', (message) => {
      setLiveGames(message.data.ongoingGames);
    })

    socket.on('recent history', (message) => {
      setRecentGames(message.data.recentGames);
    })

    socket.on("disconnect", () => {
      console.log("socket disconnected")
    })

    fetch("http://localhost:3000/games/recent")
      .then(data => data.json())
      .then(data => {
        setRecentGames(data);
        console.log("fetched from db");
      }
      )
      .catch(err => console.log(err.message))

    fetch("http://localhost:3000/games/live")
      .then(data => data.json())
      .then(data => {
        setLiveGames(data);
        console.log("fetched from db");
      }
      )
      .catch(err => console.log(err.message))
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/livegames">
            <Searchbar />
            <LiveGames liveGames={livegames} />
          </Route>
          <Route path="/player/:name">
            <PlayerPage />
          </Route>
          <Route path="/">
            <Home />
            <RecentGames recentGames={recentGames} />
          </Route>
        </Switch>
      </Router>
      <LiveGames liveGames={livegames} />
    </div>
  );
}

export default App;
