import { Router, Route } from 'react-router-dom' 
import './App.scss'
import { TripDestinations, Activities, Destinations, Trips } from './pages/index'
function App() {

  return (
    <>
      <Router>
        <Route path="/" exact element={<TripDestinations />} />
        <Route path="/" exact element={<Destinations />} />
        <Route path="/" exact element={<Activities />} />
        <Route path="/" exact element={<Trips />} />
      </Router>
    </>
  )
}

export default App
