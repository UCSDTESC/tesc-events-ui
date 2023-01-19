import React from "react";
import "../assets/css/EventCard.css";

const EventCard = (): JSX.Element => {

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "start",
    gap: "5px",
    height: "87px",
    paddingLeft: "10px",
    paddingTop: "8px"
  } as React.CSSProperties

  return (
    <div className="card outset">
      <div className="card-img"></div>
      <div style={textContainerStyle}>
        <div>EVENT NAME</div>
        <div>EVENT DATE</div>
        <div>EVENT LOCATION</div>
      </div>
    </div>
  );
}

export default EventCard;