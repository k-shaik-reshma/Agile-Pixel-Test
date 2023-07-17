import React from "react";
import "./App.css";
import PalomaSVG from "./images/Group 9.svg";
function App() {
  return (
    <div class="container">
      <div className="paloma-logo">
        <div class="paloma-svg">
          <div>
            <img className="paloma-class" src={PalomaSVG} alt="React Logo" />
          </div>
        </div>
      </div>
      <div class="paloma-menu">
        <ul>
          <li>
            <a href="#">HEAR</a>
          </li>
          <li>
            <a href="#">LATEST</a>
          </li>
          <li>
            <a href="#">TOUR</a>
          </li>
          <li>
            <a href="#">SEE</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">WATCH</a>
          </li>
          <li>
            <a href="#">PERSONAL</a>
          </li>
          <li>
            <a href="#">AID</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
