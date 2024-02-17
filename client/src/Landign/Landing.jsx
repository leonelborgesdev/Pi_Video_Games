import React from "react";
import VideoGames from "../assets/VideoGames.png";
import "./Landing.css";

export const Landing = () => {
  return (
    <div className="container_landing">
      <div className="landing_title">
        <h1>VideoGames</h1>
      </div>
      <div className="container_body_landing">
        <div className="container_detail_landing">
          <h2>Detalle de video games</h2>
        </div>
        <div className="container_image_landing">
          <img src={VideoGames} alt="" />
        </div>
      </div>
    </div>
  );
};
