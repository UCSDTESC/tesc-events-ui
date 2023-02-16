import React from "react";
import "../assets/css/EventCard.css";

const EventCard = ({ eventInfo }) => {
  // Styling, ignore me
  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "5px",
    height: "87px",
    paddingLeft: "10px",
    paddingTop: "8px"
  }

  return (
    <div className="card outset">
      <div className="card-img"></div>
      <div style={textContainerStyle}>
        {/* Since we have eventInfo prop, we can simply display the information that we want*/}
        <div>{eventInfo.title}</div>
        <div>{eventInfo.start}</div>
        <div>{eventInfo.description}</div>
      </div>
    </div>
  );
}

export default EventCard;