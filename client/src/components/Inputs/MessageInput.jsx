import React, { useState } from "react";

function MessageInput({
  id,
  label,
  type,
  disabled,
  stateChange,
  value,
  submit,
  enter,
  messagePhoto,
  setMessagePhoto,
}) {
  return (
    <div className="w-full relative my-3 flex">
      <input
        onChange={(e) => stateChange(e.target.value)}
        value={value}
        id={id}
        onKeyDown={(e) => {
          enter(e.key);
        }}
        disabled={disabled}
        type={type}
        placeholder="Type a message"
        className={`peer
        w-full
        p-4
        pt-3
        pb-[2.25rem]
        bg-gray-700
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        pl-4
        border-neutral-300
        focus:border-blue-500
        font-semibold
        text-white`}
      />

      <div
        onClick={() => submit()}
        className="flex items-center cursor-pointer hover:opacity-60"
      >
        {(value.length > 0 || messagePhoto) && (
          <div className=" flex items-center text-blue-500">
            <FiSend size={40} />
          </div>
        )}
      </div>
    </div>
  );
}
export default MessageInput;
