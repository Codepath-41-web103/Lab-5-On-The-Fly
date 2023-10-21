import React from "react";
const TripDestinations = React.lazy(() => import("./trips-destinations/TripDestinations"));
const Trips = React.lazy(() => import("./trips/Trips"));
const Activities = React.lazy(() => import("./activities/Activities"));
const Destinations = React.lazy(() => import("./destinations/Destinations"));

export { TripDestinations, Trips, Activities, Destinations };