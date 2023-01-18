import React from "react";
import { slide as Menu } from "react-burger-menu";
import { RESOURCES } from "../assets/css/Resources";
import "../assets/css/Sidebar.css";

const Sidebar = (): JSX.Element => {
  return (
    <div className="sidebar">
      <h1 style={{ margin: 0, color: RESOURCES.tescblue }}>tesc.events</h1>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/">
        My Events
      </a>
      <a className="menu-item" href="/">
        Profile
      </a>
    </div>
  );
};

export default Sidebar;
