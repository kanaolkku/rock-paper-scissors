import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <p>
        <a href="/">RPS</a>
      </p>
      <Searchbar size={"small"} />
    </nav>
  );
};

export default Navbar;
