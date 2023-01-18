import React from "react"
import { CSSProperties } from "styled-components";
import { RESOURCES } from "../assets/css/Resources";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../index.css";

const HomePage = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default HomePage;