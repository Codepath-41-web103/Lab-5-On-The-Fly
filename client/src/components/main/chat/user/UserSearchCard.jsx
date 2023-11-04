import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../auth/AuthState";

export default function UserSearchCard({ user, getChat }) {
  const [roomID, setRoomID] = useState("");
  const loginUser = useAuth();

  const updateChat = async () => {
    console.log("keysss ", loginUser.localId, user.id, roomID);
    try {
      await axios.post(`http://localhost:3001/api/chats`, {
        sender_id: loginUser.localId,
        recepient_id: user.id,
        chat_id: roomID,
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
      console.log("the room iD", roomId);
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
