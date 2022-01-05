import React from "react";

import { Grid } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
import Album from "./Album";
import "./recently.css";
function Recently() {
  const [{ recentlyPlayed }, dispatch] = useDataLayerValue();
  return (
    <div className="recent_Album">
      <div className="recently_header">
        <h2>Recently Played</h2>
      </div>
      <Grid container spacing={1}>
        {recentlyPlayed &&
          recentlyPlayed?.items?.map((element, index) => {
            return (
              <Grid item>
                <Album
                  key={index}
                  image={element?.track?.album?.images[1]?.url}
                  name={element?.track?.album?.name}
                  artist_name={element?.track?.album?.artists[0].name}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default Recently;
