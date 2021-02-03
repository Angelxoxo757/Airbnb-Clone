import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="hone">
      <Banner />

      <div className="home-section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          description="Spaces that are nore than a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable private homes, room for friends and family"
        />
      </div>
      <div className="home-section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Suprthost with a stunning view of the beachside in Sunny Bournemouth."
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoying the amazing sights of London with this stunning penthouse."
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom Flat in Bournemouth"
          description="Suprthost with great amenities and a fabolous shopping complex nearby."
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
