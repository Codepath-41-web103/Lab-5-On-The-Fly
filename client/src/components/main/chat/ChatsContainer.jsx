import React from "react";
import ChatsCard from "./ChatsCard";
import { memo } from "react";

const ChatsContainer = memo(function ChatsContainer({
  myChats,
  setSelected,
  selected,

  setShowCurrent,

  setHide,
}) {
  console.log("mychats", myChats);
  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      {myChats?.map((user) => (
        <ChatsCard
          setHide={setHide}
          setShowCurrent={setShowCurrent}
          user={user}
          key={user.id}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
    </div>
  );
});

export default ChatsContainer;
