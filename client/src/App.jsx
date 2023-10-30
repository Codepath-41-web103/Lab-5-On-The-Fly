import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
const App = () => {
  const [users, setUsers] = useState([]);
    const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");

      const data = await response.json();

      console.log(data);
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <>
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
