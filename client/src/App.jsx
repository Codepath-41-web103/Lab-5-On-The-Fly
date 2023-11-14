import { Routes, Route } from "react-router-dom";
import { Dashboard, Users, Chats, Home } from "./pages/index";
import NotFound from "./components/dom-states/NotFound";
import "@picocss/pico";
import "./App.scss";
import SignupModal from "../src/components/modals/SignupModal.jsx";
import LoginModal from "../src/components/modals/LoginModal.jsx";
import { ToasterProvider } from "./providers";
const App = () => {
  return (
    <>
      <ToasterProvider />
      <SignupModal />
      <LoginModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
