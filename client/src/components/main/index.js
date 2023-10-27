import { lazy } from "react";
const ActivityBtn = lazy(() => import('./ActivityBtn'));
const Card = lazy(() => import('./Card'));
const DestinationBtn = lazy(() => import('./DestinationBtn'));
const DestinationCard = lazy(() => import('./DestinationCard'));
export { ActivityBtn, Card, DestinationBtn, DestinationCard };