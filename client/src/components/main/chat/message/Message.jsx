import { formatDistanceToNow } from "date-fns";

import React from "react";

function Message({ message, loginUser }) {
  return (
    <div className="">
      <div
        className={`${
          loginUser?.localId === message.sender.localId ? "ml-auto" : "mx-1"
        } w-fit `}
      >
        {message.text && (
          <div className="rounded-lg p-2 bg-blue-950 mr-1 text-end  font-semibold w-fit">
            {message.text}
          </div>
        )}
      </div>
      <div className="text-xs  font-semibold text-blue-400 px-2 text-end">
        {formatDistanceToNow(message.createdAt.toDate(), {
          addSuffix: true,
        })}
      </div>
    </div>
  );
}
export default Message;
