import React, { useEffect, useState } from "react";
import UserSearch from "./user/UserSearch";
import { useAuth } from "../../../auth/AuthState.js";
import axios from "axios";
import ChatsContainer from "./ChatsContainer";
function MyChats({
  selected,
  setSelected,
  showCurrent,
  setShowCurrent,
  hide,
  setHide,
}) {
  const [myChats, setMyChats] = useState([]);
  const loginUser = useAuth();

  const getChat = async (chats) => {
    setMyChats(chats);
  };
  const getAllChat = async () => {
    const chats = await axios.get(
      `http://localhost:3001/api/chats/user/${loginUser.localId}`,
    );
    setMyChats(chats.data);
  };

  useEffect(() => {
    if (loginUser) {
      getAllChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);
  return (
    <div
      className={`bg-gray-900 text-black   md:block rounded-lg m-2 p-3 overflow-y-scroll
        col-span-3 `}
    >
      <UserSearch getChat={getChat} />
      <ChatsContainer
        setHide={setHide}
        setShowCurrent={setShowCurrent}
        myChats={myChats}
        setSelected={setSelected}
        selected={selected}
      />
    </div>
  );
}
export default MyChats;
