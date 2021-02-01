import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // MAIN STYLE CSS FILE
import "react-date-range/dist/theme/default.css"; // THENE STILE CSS
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

// DATE PICKER COMPONENT
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.setEndDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onclick={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
        <input min={0} defaultValue={2} type="header" />
        <Button>Search Airbnb</Button>
      </h2>
    </div>
  );
}

export default Search;
