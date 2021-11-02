import React from "react";
import "./Album.css";
function Album({ image, name, artist_name }) {
  return (
    <div className="album">
      <img src={image} alt=" " />
      <p>
        {String(name).length > 15 ? String(name).slice(0, 15) + "..." : name}
      </p>
      <p>{artist_name}</p>
    </div>
  );
}

export default Album;
