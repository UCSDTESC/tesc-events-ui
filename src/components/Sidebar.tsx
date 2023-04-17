import React from "react";
import "../assets/css/Sidebar.css";

const Sidebar = (): JSX.Element => {
  return (
    <div className="sidebar outset">
      <h1 className="sidebar-title">tesc.events</h1>
      <nav className="sidebar-nav">
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="#">
          My Events
        </a>
        <a className="menu-item" href="/profile">
          Profile
        </a>
      </nav>
      <button className="sidebar-logout">Logout</button>
    </div>
  );
};

export default Sidebar;
