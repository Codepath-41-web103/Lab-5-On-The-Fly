import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
// chat_id TEXT NOT NULL DEFAULT '',
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// recepient_id TEXT NOT NULL DEFAULT '',
// recepient_name TEXT NOT NULL DEFAULT '',
// recepient_email TEXT NOT NULL DEFAULT '',
// recepient_avatar_url TEXT NOT NULL DEFAULT '',
// sender_id TEXT NOT NULL DEFAULT ''
function ChatsCard({ user, setSelected, selected, setHide, setShowCurrent }) {
  const setSelectedAndCurrent = () => {
    setSelected(user);
    setShowCurrent(true);
    setHide(false);
  };

  return (
    <div
      onClick={() => setSelectedAndCurrent()}
      className={`w-10/10 m-2 flex cursor-pointer hover:opacity-60 shadow-xl ${
        user.recepient_email === selected.recepient_email
          ? "bg-blue-500"
          : "bg-slate-300"
      } p-1 rounded-lg`}
    >
      <div className={`mx-1`}>
        <div className="flex  ">
          <div className="text-xs  font-semibold">{user.recepient_name}</div>
        </div>
        <div className="text-xs flex flex-wrap  ">
          {" "}
          <div className=" font-semibold text-xs mr-1 ">Email:</div>
          {user.recepient_email}
        </div>
      </div>
    </div>
  );
}
export default ChatsCard;
