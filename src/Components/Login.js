import React from "react";
import { loginUri } from "../spotifyConfig";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="spotify-logo"
      />
      <a href={loginUri}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
export default Login;
