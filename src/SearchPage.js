import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-info">
        <p>62 stays - 25 November to 30 November - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>

        <SearchResult />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB1oOGlulst14w0PLYLo7h2J4zHkOfgke8w&usqp=CAU"
          location="Private room in the center of london."
        />
      </div>
    </div>
  );
}
export default SearchPage;
