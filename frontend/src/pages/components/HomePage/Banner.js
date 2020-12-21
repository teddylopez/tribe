import React from "react";
import "../../../styles/Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <div className="hero-banner">
          <h1>Independent Vendors and Artists</h1>
          <h2>American Made Goods</h2>
        </div>
      </div>
      <div className="sub-header overlayed-z">
        <div className="header-highlight"></div>
        <div className="header-highlight"></div>
        <div className="header-highlight"></div>
        <div className="header-highlight"></div>
      </div>
    </div>
  );
}

export default Banner;
