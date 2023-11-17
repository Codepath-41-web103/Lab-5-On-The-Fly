import { useEffect, useRef } from "react";

import Message from "./Message";

function Messages({ messages, loginUser, scroll, setScroll }) {
  const dummy = useRef();
  const shouldScroll = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    shouldScroll();
    setScroll(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return (
    <div className="h-full overflow-y-scroll">
      {" "}
      {messages.map((message) => (
        <div key={message.createdAt} className="">
          {loginUser?.localId === message.sender.localId ? (
            <div
              key={message.createdAt}
              className="flex items-start justify-end m-2"
            >
              <Message message={message} loginUser={loginUser} />
              <div className="h-full flex">
                <img
                  className="rounded-full w-8 h-8 mt-1"
                  src={message.sender.photoUrl}
                />
              </div>
            </div>
          ) : (
            <div
              key={message.createdAt}
              className="flex items-start justify-start m-2"
            >
              <img
                className="rounded-full w-8 h-8 mt-1"
                src={message.sender.photoUrl}
              />
              <Message message={message} loginUser={loginUser} />
            </div>
          )}
        </div>
      ))}
      <span ref={dummy}></span>
    </div>
  );
}
export default Messages;
