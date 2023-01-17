import React from "react";
import Sidebar from "./Sidebar";
import "../index.css"
import { RESOURCES } from "../assets/css/Resources";

const Header = (): JSX.Element => {
  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    textAlign: "center",
    height: RESOURCES.headerHeight,
    backgroundColor: RESOURCES.tescblue,
    padding: "20px 20px",
    boxSizing: "border-box",
    color: "white",
    fontFamily: "Lato"
  } as React.CSSProperties;

  return (
    <div>
      <Sidebar />
    <div style={headerStyle}>
      Home
    </div>
</div>
  )
}

export default Header;