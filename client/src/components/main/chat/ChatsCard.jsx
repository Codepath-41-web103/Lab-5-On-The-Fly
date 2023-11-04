import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function ChatsCard({
  user,
  setSelected,
  selected,

  setShowCurrent,

  setHide,
}) {
  const [picId, setPicId] = useState(100);

  const setSelectedAndCurrent = () => {
    setSelected(user);
    setShowCurrent(true);
    setHide(false);
  };

  useEffect(() => {
    if (user) {
      const id = parseInt(user.recepientUniq.slice(-3));

      setPicId(id);
    }
  }, [user]);

  return (
    <div
      onClick={() => setSelectedAndCurrent()}
      className={`w-10/10 m-2 flex cursor-pointer hover:opacity-60 shadow-xl ${
        user.recepientEmail === selected.recepientEmail
          ? "bg-blue-500"
          : "bg-slate-300"
      } p-1 rounded-lg`}
    >
      <div className={`mx-1`}>
        <div className="flex  ">
          <div className="text-xs  font-semibold">{user.recepientName}</div>
        </div>
        <div className="text-xs flex flex-wrap  ">
          {" "}
          <div className=" font-semibold text-xs mr-1 ">Email:</div>
          {user.recepientEmail}
        </div>
      </div>
    </div>
  );
}
export default ChatsCard;
