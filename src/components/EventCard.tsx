import React from "react";
import { RESOURCES } from "../assets/css/Resources";

const EventCard = (): JSX.Element => {
  const cardStyle = {
    width: RESOURCES.eventCardWidth,
    height: RESOURCES.eventCardHeight,
    background: RESOURCES.lightgray,
    borderRadius: "25px",
    boxShadow: "-2px -2px 14px 4px #FFFFFF, 3px 3px 8px #747374, 3px 3px 15px #BEBEBE",
    margin: "auto",
  }

  const imgStyle = {
    width: RESOURCES.eventCardWidth,
    height: RESOURCES.eventCardImgHeight,
    backgroundColor: RESOURCES.tescblue,
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
  }

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "start",
    gap: "5px",
    height: "87px",
    paddingLeft: "10px",
    paddingTop: "8px"
  }

  return (
    <div className="event-card-container" style={cardStyle}>
      <div style={imgStyle}></div>
      <div style={textContainerStyle}>
        <div>EVENT NAME</div>
        <div>EVENT DATE</div>
        <div>EVENT LOCATION</div>
      </div>
    </div>
  );
}

export default EventCard;