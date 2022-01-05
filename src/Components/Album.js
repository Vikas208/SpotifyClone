import React from "react";
import "./Album.css";
function Album({ image, name, artist_name, isLarge = true }) {
  return (
    <div
      className="album"
      style={
        isLarge
          ? { minHeight: "200px", width: "150px" }
          : { minHeight: "100px", width: "130px" }
      }
    >
      <img
        src={image}
        alt=" "
        style={
          isLarge
            ? { height: "150px", width: "160px" }
            : { height: "100px", width: "100px" }
        }
      />
      <p>
        {String(name).length > 15 ? String(name).slice(0, 15) + "..." : name}
      </p>
      <p>{artist_name}</p>
    </div>
  );
}

export default Album;
