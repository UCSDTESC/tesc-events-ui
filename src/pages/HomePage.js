import EventGrid from "../components/EventGrid";
import Sidebar from "../components/Sidebar";
import "../index.css";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  /// TUTORIAL ON USING AXIOS, STATE, AND PROPS
  /* 1. Create a state hook variable. For more information, see https://reactjs.org/docs/hooks-state.html
   * 2. Create a useEffect() hook that calls the backend api
   * 3. Display the data
  */

  // Step 1. State hook
  // Initialize the events state hook to an empty array
  const [events, setEvents] = useState([]); 
        
  // Step 2. useEffect hook
  // Called when component first loads
  useEffect(() => {
    // Use axios to perform an HTTP GET request on the backend api at route /api/events
    axios.get("https://3ae918d3-e290-4f43-9cab-5fd0ae360b30.mock.pstmn.io/api/events")
      // Wait for the result...
      .then((result) => {
        // ...then set event state hook with the
        setEvents(result.data);
      });
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1 className="content-title">Upcoming Events</h1>
        { /* Step 3. We can display the data straight-up by using a <ul> (bulleted/unordered list) and <li> (list item) HTML tag
          * Using .map(), we can display the title, description, and start date for each each array element in the HTTP GET response.
          * For more info on .map(), see https://www.w3schools.com/jsref/jsref_map.asp
        */}
        <ul>
          {events.map((data) => (
            <li>{data.title}, {data.description}, {data.start}</li>
          ))}
        </ul>

        { /*
          * Alternatively, we can pass our data as JS props to another component and let that handle the rendering
          */}
        <EventGrid events={events} />
      </div>
    </div>
  )
}

export default HomePage;