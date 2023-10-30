import { lazy } from "react";
const FooterBar = lazy(() => import('./'));
const NavBar = lazy(() => import('./'));
const HeaderContent= lazy(() => import('./'));
export { 
  FooterBar,
  NavBar,
  HeaderContent
};