import React, { useEffect, useState } from "react";

import { AiOutlineLeft } from "react-icons/ai";

export default function Header({
  photo,
  name,
  showCurrent,
  setShowCurrent,
  email,
  localId,
}) {
  return (
    <div className="w-full bg-blue-400  flex items-center rounded-lg">
      <div
        onClick={() => {
          setShowCurrent(false);
        }}
        className="left-0 cursor-pointer hover:opacity-60"
      >
        <AiOutlineLeft size={26} />
      </div>
      <div className="flex w-1/2 mx-auto">
        <div className="">
          <div className="text-2xl mx-2  font-semibold">{name}</div>
          <div className=" mx-2 text-gray-800 text-sm  font-semibold">
            {email}
          </div>
        </div>
      </div>
    </div>
  );
}
