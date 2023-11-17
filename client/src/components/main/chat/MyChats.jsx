import React, { useEffect, useState } from "react";
import UserSearch from "./user/UserSearch";
import { useAuth } from "../../../auth/AuthState.js";
import axios from "axios";
import ChatsContainer from "./ChatsContainer";
import { IoReload } from "react-icons/io5";
import toast from "react-hot-toast";
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
      `https://lab-5-on-the-fly-api.vercel.app/api/chats/user/${loginUser.localId}`,
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
      className={`bg-gray-900 text-black   md:block rounded-lg m-2 p-3 overflow-y-scroll ${
        showCurrent ? " hidden md:col-span-3 " : " col-span-10 "
      } ${hide ? " col-span-10  " : ""}
       ${!showCurrent && !hide ? "md:col-span-3" : "md:col-span-10 "} `}
    >
      <UserSearch getChat={getChat} />
      <div
        onClick={() => {
          getAllChat();
          toast.success("Reloaded Chats Sucessfully");
        }}
        className="text-white font-bold text-end flex justify-end px-6 cursor-pointer"
      >
        <IoReload size={20} />
      </div>
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
