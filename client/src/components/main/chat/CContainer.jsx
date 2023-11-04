import React, { useState } from "react";
import MyChats from "./MyChats";
import CurrentChats from "./CurrentChats";

function CContainer({}) {
  return (
    <div className="grid  grid-cols-10 w-4/5 h-4/5 p-1  overflow-y-scroll">
      <MyChats />
      <CurrentChats />
    </div>
  );
}

export default CContainer;
