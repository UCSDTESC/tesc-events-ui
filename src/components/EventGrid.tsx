import "../assets/css/EventGrid.css" 
import EventCard from "./EventCard";
const EventGrid = (): JSX.Element => {
  return (
    <div className="event-grid">
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
  )
}

export default EventGrid;