import "../../../styles/HomePage.css";
import React from "react";

function HomePageSection() {
  return (
    <div className="section-container">
      <div className="z-box thin-container-box">
        <div className="inner-box-1">
          <div className="inner-box-row">
            <div className="inner-box-row-box box-wide"></div>
            <div className="inner-box-row-box">
              <h3>Lopez Designs</h3>
            </div>
          </div>
          <div className="inner-box-row">
            <div className="inner-box-row-box">
              <h3>Lopez Photography</h3>
            </div>
            <div className="inner-box-row-box box-wide"></div>
          </div>
        </div>
        <div className="inner-box-2">
          <h1 className="inner-box-h1">
            Check out December's Vendor Spotlight
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePageSection;
