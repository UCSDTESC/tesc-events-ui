import "../assets/css/EventGrid.css" 
import EventCard from "./EventCard";

// Here, we take in events as props and for each event in the list of events, render an <EventCard> component.
// We pass the event as the eventInfo props to the EventCard component so that it can render that data
const EventGrid = ({events}) => {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <EventCard eventInfo={event} />
      ))}
    </div>
  )
}

export default EventGrid;