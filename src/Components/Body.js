import { Person, ArrowDropDown, ArrowBack } from "@material-ui/icons";

import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./Body.css";
import Album from "./Album";
import { Grid } from "@material-ui/core";
function Body() {
  const [{ user, recentlyPlayed }, dispatch] = useDataLayerValue();

  // console.log(recentlyPlayed.items[10].track.album.artists[0].name);
  // console.log(recentlyPlayed.items[10].track.album.name);
  // console.log(recentlyPlayed.items[10].track.album.images[1].url);
  let key = 0;
  return (
    <div className="body">
      <div className="header">
        <ArrowBack className="back" />
        <div className="account">
          <Person className="person" />
          <p>{user?.display_name}</p>
          <ArrowDropDown />
        </div>
      </div>
      <div className="recentlyplayed">
        <h2 style={{ cursor: "pointer" }}>Recently Played</h2>

        <div className="grid_player">
          <Grid container spacing={2}>
            {recentlyPlayed &&
              recentlyPlayed?.items?.map((element) => {
                return (
                  <Grid item>
                    <Album
                      key={key++}
                      image={element?.track?.album?.images[1]?.url}
                      name={element?.track?.album?.name}
                      artist_name={element?.track?.album?.artists[0].name}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Body;
