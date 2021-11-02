import "./App.css";
import { useState, useEffect } from "react";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromUrl } from "./spotifyConfig";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState();
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getRecommendations().then((recommendations) => {
        dispatch({
          type: "SET_RECOMMENDETIONS",
          recommendations: recommendations,
        });
      });
      spotify.getMyRecentlyPlayedTracks().then((recentlyPlayed) => {
        dispatch({
          type: "SET_RECENTLYPLAYEDTRACKS",
          recentlyPlayed: recentlyPlayed,
        });
      });
    }
  }, []);
  console.log(spotify);
  console.log(user);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
