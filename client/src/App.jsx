import './App.scss';
import { useState, useEffect } from 'react';
import { ReadTrips, CreateTrip, EditTrip, ReadDestinations, TripDetails, CreateDestination, CreateActivity, AddToTrip } from './pages/index';
import { useRoutes } from 'react-router-dom';

import { Link } from 'react-router-dom';
const App = () => {
  
  const [trips, setTrips] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch('/api/trips')
      const data = await response.json()
      setTrips(data)
    }
  
    fetchTrips()
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadTrips data={trips}/>
    },
    {
      path:"/trip/new",
      element: <CreateTrip />
    },
    {
      path:"/edit/:id",
      element: <EditTrip data={trips} />
    },
    {
      path:"/destinations",
      element: <ReadDestinations data={destinations} />
    },
    {
      path:"/trip/get/:id",
      element: <TripDetails data={trips} />
    },
    {
      path:"/destination/new/:trip_id",
      element: <CreateDestination />
    },
    {
      path:"/activity/create/:trip_id",
      element: <CreateActivity />
    },
    {
      path:"/destinations/add/:destination_id",
      element: <AddToTrip data={trips}/>
    }
  ]);

  
  return ( 

    <div className="App">

      <div className="header">

        <h1>On The Fly ✈️</h1>
        <Link to="/"><button className="headerBtn">Explore Trips</button></Link>
        <Link to="/destinations"><button className="headerBtn">Explore Destinations</button></Link>
        <Link to="/trip/new"><button className="headerBtn"> + Add Trip </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
