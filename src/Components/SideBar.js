import React from "react";
import "./sideBar.css";
import SideBarOption from "./SideBarOption";
import Home from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import Library from "@material-ui/icons/LibraryMusic";
import Create from "@material-ui/icons/CreateOutlined";
import Favorite from "@material-ui/icons/Favorite";
import { useDataLayerValue } from "../DataLayer";
function SideBar() {
  const [{ playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify_logo"
      />
      <SideBarOption title="Home" Icon={Home} active={true} />
      <SideBarOption title="Search" Icon={Search} />
      <SideBarOption title="Library" Icon={Library} />
      <SideBarOption title="Create Playlist" Icon={Create} />
      <SideBarOption title="Liked  Songs" Icon={Favorite} />
      <hr />
      {playlist?.items?.map((element) => {
        return <SideBarOption title={element.name} />;
      })}
      {/* <SideBarOption title="Hip Hop" />
      <SideBarOption title="Rock" /> */}
    </div>
  );
}

export default SideBar;
