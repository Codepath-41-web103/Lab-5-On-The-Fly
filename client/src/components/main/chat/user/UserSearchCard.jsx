import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../auth/AuthState";

export default function UserSearchCard({ user, getChat }) {
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
        recepient_avatar_url: user.avatar_url,
      });
      await axios.post(`https://lab-5-on-the-fly-api.vercel.app/api/chats`, {
        sender_id: user.id,
        recepient_id: loginUser.localId,
        chat_id: roomID,
        recepient_name: loginUser.displayName || loginUser.email.split("@")[0],
        recepient_email: loginUser.email,
        recepient_avatar_url: loginUser.photoUrl,
      });
      const newChats = await axios.get(
        `https://lab-5-on-the-fly-api.vercel.app/api/chats/user/${loginUser.localId}`,
      );
      getChat(newChats.data);
      return;
    } catch (error) {
      console.log("Error Creating Chat");
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
    <div
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
  );
}
