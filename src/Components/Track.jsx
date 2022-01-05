import React from "react";
import "./track.css";

function Track({ name, image }) {
  return (
    <div className="track">
      <img src={image} alt="Img" />
      <p>
        {String(name).length > 30 ? String(name).slice(0, 30) + "..." : name}
      </p>
    </div>
  );
}

export default Track;
