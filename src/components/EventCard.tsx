import React from "react";
import "../assets/css/EventCard.css";
import EventDetails from "./EventDetails";
import EventDetailsWrapper from "./EventDetailsWrapper";

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

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const toggleDetails = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="card outset">
      <button onClick={toggleDetails}>
        <div className="card-img"></div>
        <div style={textContainerStyle}>
          <div>EVENT NAME</div>
          <div>EVENT DATE</div>
          <div>EVENT LOCATION</div>
        </div>
        </button>

      <EventDetailsWrapper isModalVisible={isModalVisible} onBackdropClick = {toggleDetails} />
    </div>
  );
}

export default EventCard;