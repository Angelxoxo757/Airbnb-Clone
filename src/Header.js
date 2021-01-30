import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header-icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="Airbnb Logo"
      />
      <div className="header-center">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
