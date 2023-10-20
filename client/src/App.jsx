import { Routes, Route } from 'react-router-dom' 
import './App.scss'
import { TripDestinations, Activities, Destinations, Trips } from './pages/index'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<TripDestinations />} />
        <Route path="/" exact element={<Destinations />} />
        <Route path="/" exact element={<Activities />} />
        <Route path="/" exact element={<Trips />} />
      </Routes>
    </>
  )
}

export default App
