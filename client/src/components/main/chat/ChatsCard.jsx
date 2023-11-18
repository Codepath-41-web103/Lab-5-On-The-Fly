import axios from "axios";
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
  const [userInfo, setUserInfo] = useState(null);

  const setSelectedAndCurrent = () => {
    setSelected(user);
    setShowCurrent(true);
    setHide(false);
  };

  const handleUserInfo = async () => {
    const result = await axios.get(
      `https://lab-5-on-the-fly-api.vercel.app/api/users/${user.recepient_id}`,
    );

    user = result.data[0];

    setUserInfo(user);
  };

  useEffect(() => {
    if (user) {
      handleUserInfo();
    }
  }, [user]);

  return (
    <div
      onClick={() => setSelectedAndCurrent()}
      className={`w-10/10 m-2 flex cursor-pointer hover:opacity-60 shadow-xl ${
        user.recepient_email === selected.recepient_email
          ? "bg-blue-500"
          : "bg-slate-300"
      } p-1 rounded-lg`}
    >
      {userInfo && (
        <img
          className="w-8 h-8 rounded-full"
          src={
            userInfo.avatar_url ||
            "https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&rs=1&c=1&qlt=95&w=132&h=115"
          }
        />
      )}

      <div className={`mx-1`}>
        <div className="flex ">
          <div className="text-xs font-bold">{user.recepient_name}</div>
        </div>
        <div className="flex flex-wrap text-xs "> {user.recepient_email}</div>
      </div>
    </div>
  );
}
export default ChatsCard;
