import React, { useEffect, useState } from "react";

function MyChats({}) {
  return (
    <div
      className={`bg-gray-900 text-black   md:block rounded-lg m-2 p-3 overflow-y-scroll
        col-span-3 `}
    >
      <UserSearch getChat={getChat} />
      {/* <ChatsContainer
        setHide={setHide}
        setShowCurrent={setShowCurrent}
        myChats={myChats}
        setSelected={setSelected}
        selected={selected}
      /> */}
    </div>
  );
}
export default MyChats;
