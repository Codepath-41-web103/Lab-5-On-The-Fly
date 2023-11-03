import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Chats from "./pages/chat/Chat";
import Home from "./pages/Home";
import NotFound from "./components/dom-states/NotFound";
import ToasterProvider from "./providers/ToastProvider";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3001/api/users");

      const data = await response.json();

      console.log(data);
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <>
      <ToasterProvider />
      <LoginModal />
      <SignupModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
