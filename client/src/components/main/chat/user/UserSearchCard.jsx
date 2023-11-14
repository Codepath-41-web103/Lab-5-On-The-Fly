import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../auth/AuthState";

export default function UserSearchCard({ user, getChat }) {
  const [roomID, setRoomID] = useState("");
  const loginUser = useAuth();

  const updateChat = async () => {
    try {
      await axios.post(`http://localhost:3001/api/chats`, {
        sender_id: loginUser.localId,
        recepient_id: user.id,
        chat_id: roomID,
        recepient_name: user.name,
        recepient_email: user.email,
        recepient_avatar_url: user.avatar_url,
      });
      await axios.post(`http://localhost:3001/api/chats`, {
        sender_id: user.id,
        recepient_id: loginUser.localId,
        chat_id: roomID,
        recepient_name: loginUser.displayName || loginUser.email.split("@")[0],
        recepient_email: loginUser.email,
        recepient_avatar_url: loginUser.photoUrl,
      });
      const newChats = await axios.get(
        `http://localhost:3001/api/chats/user/${loginUser.localId}`,
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
      className="w-6/7 m-2 flex cursor-pointer bg-slate-300 p-1 rounded-lg hover:opacity-60"
    >
      <div className={`mx-1`}>
        <div className="flex">
          <div className="text-xs ">{user.name}</div>
        </div>
        <div className="text-xs flex">
          {" "}
          <div className="font-bold text-xs mr-1">Email:</div>
          {user.email}
        </div>
      </div>
    </div>
  );
}