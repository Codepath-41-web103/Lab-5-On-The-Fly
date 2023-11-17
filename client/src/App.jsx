import { Routes, Route } from "react-router-dom";
import { Dashboard, Users, Chats, Home } from "./pages/index";
import NotFound from "./components/dom-states/NotFound";
import "@picocss/pico";
import "./App.scss";
import { ToasterProvider } from "./providers";
import ViewProfileModal from "./components/modals/ViewProfile";
const App = () => {
  return (
    <>
      <ToasterProvider />
      <ViewProfileModal />
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
