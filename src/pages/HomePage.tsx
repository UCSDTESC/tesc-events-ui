import React from "react"
import { RESOURCES } from "../assets/css/Resources";
import EventCard from "../components/EventCard";
import Header from "../components/Header";

const HomePage = (): JSX.Element => {
  const listStyle = {
    paddingTop: "80px",
    listStyle: "none",
    display: "grid",
    gap: "40px",
    gridTemplateColumns: `repeat(auto-fit, minmax(${RESOURCES.eventCardWidth}, 1fr))`,
    maxWidth: "80%",
    margin: "auto"
  }
  return (
    <div className="home-page">
      <Header />
      <div style={ listStyle }>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default HomePage;