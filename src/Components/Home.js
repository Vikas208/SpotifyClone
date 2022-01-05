import React, { useState, useEffect } from "react";
import { useDataLayerValue } from "../DataLayer";
import "./Home.css";
import { Grid } from "@material-ui/core";
import Album from "./Album";
import Track from "./Track";
import { Link } from "react-router-dom";
function Home() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [{ user, tracks, recentlyPlayed }, dispatch] = useDataLayerValue();
  useEffect(() => {
    let time = new Date(Date.now()).getHours();
    if (time >= 0 && time <= 11) {
      setGreeting("Good Morning");
    } else if (time >= 12 && time <= 15) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="home">
      <div className="welcome">
        <span>
          {greeting},{user?.display_name}
        </span>
      </div>

      {/* Tracks */}
      <div className="tracks">
        <div className="list">
          <Grid container spacing={1} columns={3}>
            {console.log(tracks)}
            {tracks &&
              tracks?.map((element, index) => {
                return (
                  <Grid item>
                    <Track
                      key={index}
                      image={element?.album?.images[2]?.url}
                      name={element?.album?.name}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>

      {/* Recently Played */}

      <div className="recently ">
        <div className="recently_header">
          <h2>Recently Played</h2>
          <Link to="/recently">See All</Link>
        </div>
        <Grid container spacing={1}>
          {recentlyPlayed &&
            recentlyPlayed?.items?.map((element, index) => {
              if (index >= 6) {
                return "";
              }
              return (
                <Grid item>
                  <Album
                    key={index}
                    isLarge={false}
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
  );
}

export default Home;
