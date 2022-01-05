import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./Body.css";
import Album from "./Album";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Recently from "./Recently";
function Body() {
  const [{ user, recentlyPlayed }, dispatch] = useDataLayerValue();

  // console.log(recentlyPlayed.items[10].track.album.artists[0].name);
  // console.log(recentlyPlayed.items[10].track.album.name);
  // console.log(recentlyPl@material-ui/icons/Home"ayed.items[10].track.album.images[1].url);
  // let key = 0;
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/recently" element={<Recently/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Body;
