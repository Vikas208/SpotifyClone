import React, { useEffect, useState } from "react";
import { Person, ArrowBack } from "@material-ui/icons";

import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
function Header() {
  const location = useLocation();
  const navigation = useNavigate();
  const [location_, setlocation] = useState(false);
  useEffect(() => {
    location.pathname === "/" || location.pathname === "/home"
      ? setlocation(false)
      : setlocation(true);
  }, [location]);

  const handleBack = () => {
    if (location_) {
      navigation(-1);
    }
  };
  return (
    <div className="header">
      <ArrowBack
        className="back"
        style={!location_ ? { cursor: "not-allowed" } : { cursor: "pointer" }}
        onClick={handleBack}
      />
      <div className="account">
        <Person className="person" />
      </div>
    </div>
  );
}

export default Header;
