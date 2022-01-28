import React from "react";
import Searchbar from "./Searchbar";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-item-container">
        <h1 className="home-item">Rock Paper Scissors</h1>
        <h3 className="home-item">Stats and live games</h3>
        <Searchbar />
      </div>
    </section>
  )
}

export default Home;