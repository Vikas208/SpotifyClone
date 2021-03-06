import React from "react";
import "./sidebaroption.css";
function SideBarOption({ title, Icon, active }) {
  return (
    <div className="sidebaroption">
      {Icon && <Icon className="sidebaroption_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
