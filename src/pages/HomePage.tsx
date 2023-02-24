import EventGrid from "../components/EventGrid";
import Sidebar from "../components/Sidebar";
import "../index.css";

const HomePage = (): JSX.Element => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1 className="content-title">Upcoming Events</h1>
        <EventGrid />

        <div id="modal-root"></div>
      </div>
    </div>
  )
}

export default HomePage;