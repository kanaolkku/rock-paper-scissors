import React, { useState } from "react";

const Searchbar = ({ size }) => {
  const [inputData, setInputData] = useState("");
  const searchPlayer = (e) => {
    e.preventDefault();
    window.location.href = `/player/${inputData}`
  }

  return (
    <div>
      <form onSubmit={searchPlayer} className="home-item">
        <input
          className={size === "small" ? "searchbar-small" : "searchbar"}
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          placeholder="e.g. Tapio Laine"
        />
        <input type="submit" value={"Search"} className={size === "small" ? "button-small" : "button"}></input>
      </form>
    </div>
  )
}

export default Searchbar