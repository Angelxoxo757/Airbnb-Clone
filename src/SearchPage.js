import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

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
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB1oOGlulst14w0PLYLo7h2J4zHkOfgke8w&usqp=CAU"
        location="Private room in the center of london."
        title="Stay in this spacious Edwardain house."
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
        star={4.73}
        price="£30/night"
        total="£117 total"
      />
      <SearchResult
        img="https://static1.mansionglobal.com/production/media/article-images/0300e7936543f7e39de6a5b9b1d8d25d/large_2.Taylor-Wimpey-Central-London_Postmark_Living-space.jpg"
        location="Private room in the central london."
        title="11th-Floor Condo."
        description="1 guest - 2 bedroom - 2 bed - 2 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
        star={4.23}
        price="£80/night"
        total="£224 total"
      />
      <SearchResult
        img="https://cf.bstatic.com/images/hotel/max1024x768/258/258747098.jpg"
        location="Luxury Condo in the Heart of London."
        title="14th-Floor Condo."
        description="2 guest - 2 bedroom - 2 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
        star={4.13}
        price="£50/night"
        total="£294 total"
      />
      <SearchResult
        img="https://photosrp.dotproperty.co.th/1.0-GB-29109-PP-676621-76110629656f36120d0d19-1-1200-630/2-bedroom-condo-for-sale-in-landmark-place-at-tower-bridge-london-ec3-city-of-london-england.jpg"
        location="Private room in Barratt london."
        title="25th-Floor Condo."
        description="1 guest - 2 bedroom - 2 bed - 2 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
        star={5.23}
        price="£229/night"
        total="£5,000 total"
      />
    </div>
  );
}
export default SearchPage;
