import { lazy } from 'react';
const EditTrip =  lazy(() => import('./trips/EditTrip'));
const ReadDestinations =  lazy(() => import('./destinations/ReadDestinations'));
const TripDetails =  lazy(() => import('./trips/TripDetails'));
const CreateDestination =  lazy(() => import('./destinations/CreateDestination'));
const CreateActivity =  lazy(() => import('./activities/CreateActivity'));
const AddToTrip =  lazy(() => import('./trips/AddToTrip'));
const ReadTrips =  lazy(() => import('./trips/ReadTrips'));
const CreateTrip =  lazy(() => import('./trips/CreateTrip'));
export {
  EditTrip,
  ReadDestinations,
  TripDetails,
  CreateDestination,
  CreateActivity,
  AddToTrip,
  ReadTrips,
  CreateTrip
};