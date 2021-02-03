import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      {showSearch && <Search />}
      <div className="banner-search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner-searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gem near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
