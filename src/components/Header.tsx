import React from "react";
import Sidebar from "./Sidebar";
import "../index.css"
import { RESOURCES } from "../assets/css/Resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (): JSX.Element => {
  const headerStyle = {
    textAlign: "center",
    padding: "20px 20px",
    color: "white",
    fontFamily: "Lato",
  } as React.CSSProperties;

  return (
    <div className="header">
      <div className="icon">
        <button onClick={() => alert("sladjfa")} style={{ background: "none"}}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg"/>
        </button>
      </div>
      <div style={headerStyle}>
        Home
      </div>
</div>
  )
}

export default Header;