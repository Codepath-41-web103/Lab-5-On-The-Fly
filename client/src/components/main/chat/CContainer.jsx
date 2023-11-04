import React, { useState } from "react";
import MyChats from "./MyChats";
import CurrentChats from "./CurrentChats";
// chat_id TEXT NOT NULL DEFAULT '',
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// recepient_id TEXT NOT NULL DEFAULT '',
// recepient_name TEXT NOT NULL DEFAULT '',
// recepient_email TEXT NOT NULL DEFAULT '',
// recepient_avatar_url TEXT NOT NULL DEFAULT '',
// sender_id TEXT NOT NULL DEFAULT ''
function CContainer({}) {
  const test = {
    show: false,
    created_at: "",
    id: NaN,
    recepient_id: NaN,
    recepient_email: "",
    recepient_name: "Global Room 🧑‍🚀",
    recepient_avatar_url: "",
    sender_id: "",
    chat_id: "q",
  };
  const [selectedChat, setSelectedChat] = useState(test);
  const [showCurrent, setShowCurrent] = useState(false);
  const [hide, setHide] = useState(true);
  return (
    <div className="grid  grid-cols-10 w-4/5 h-4/5 p-1  overflow-y-scroll">
      <MyChats
        hide={hide}
        setHide={setHide}
        selected={selectedChat}
        setSelected={setSelectedChat}
        showCurrent={showCurrent}
        setShowCurrent={setShowCurrent}
      />
      <CurrentChats
        hide={hide}
        setHide={setHide}
        selected={selectedChat}
        showCurrent={showCurrent}
        setShowCurrent={setShowCurrent}
      />
    </div>
  );
}

export default CContainer;
