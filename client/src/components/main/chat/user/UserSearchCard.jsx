import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useAuth } from "../../../../auth/AuthState";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

export default function UserSearchCard({ user, getCha }) {
  const [roomID, setRoomID] = useState("");
  const loginUser = useAuth();
  const updateChat = async () => {
    try {
      await axios.post(`https://lab-5-on-the-fly-api.vercel.app/api/chats`, {
        sender_id: loginUser.localId,
        recepient_id: user.id,
        chat_id: roomID,
        recepient_name: user.name,
        recepient_email: user.email,
        recepient_avatar_url:
          user.avatar_url ||
          "https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&rs=1&c=1&qlt=95&w=132&h=115",
      });

      await axios.post(`https://lab-5-on-the-fly-api.vercel.app/api/chats`, {
        sender_id: user.id,
        recepient_id: loginUser.localId,
        chat_id: roomID,
        recepient_name: loginUser.displayName || loginUser.email.split("@")[0],
        recepient_email: loginUser.email,
        recepient_avatar_url: loginUser.photoUrl || null,
      });

      const newChats = await axios.get(
        `https://lab-5-on-the-fly-api.vercel.app/api/chats/user/${loginUser.localId}`,
      );
      getChat(newChats.data);
      toast.success("Chat Created");
      return;
    } catch (error) {
      console.log("Error Creating Chat", error);
    }
  };

  useEffect(() => {
    if (loginUser) {
      const roomId = [...user.id, ...loginUser.localId].sort().join("");

      setRoomID(roomId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);
  return (
    <Fragment>
      <div
        id="user-search-card"
        onClick={() => updateChat()}
        className="flex p-1 m-2 rounded-lg cursor-pointer w-6/7 bg-slate-300 hover:opacity-60"
      >
        <div className={`mx-1`}>
          <div className="flex">
            <div className="text-xs ">{user.name}</div>
          </div>
          <div className="flex text-xs">
            {" "}
            <div className="mr-1 text-xs font-bold">Email:</div>
            {user.email}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

UserSearchCard.propTypes = {
  user: PropTypes.object,
  getChat: PropTypes.func,
};
