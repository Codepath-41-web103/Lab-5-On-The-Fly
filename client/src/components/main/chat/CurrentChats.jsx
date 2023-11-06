"use client";
import MessageInput from "../../Inputs/MessageInput";

import React, { useEffect, useState } from "react";

import { collection, addDoc, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../auth/Firebase";
import { useAuth } from "../../../auth/AuthState";
import Header from "../../Inputs/Header";
import Messages from "./message/Messages";
import axios from "axios";

function CurrentChats({
  selected,
  showCurrent,
  setShowCurrent,
  setHide,
  hide,
}) {
  const [userInfo, setUserInfo] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [scroll, setScroll] = useState(false);
  const roomId = selected.chat_id;

  const messagesRef = collection(db, "messages");
  console.log("the room ID", roomId);
  const queryRef = query(messagesRef, where("roomId", "==", roomId));
  const [messages, setMessages] = useState([]);

  const [Message] = useCollectionData(queryRef);

  const loginUser = useAuth();

  const handleSubmit = async (e) => {
    if (newMessage === "") return;
    const message = newMessage.length !== 0 ? newMessage : null;
    console.log("the user info", userInfo);
    await addDoc(messagesRef, {
      text: message,
      sender: {
        ...loginUser,
        displayName: userInfo.name,
        photoUrl: userInfo.avatar_url,
      },
      createdAt: new Date(),
      roomId,
    });

    setNewMessage("");

    setScroll(true);
    setScroll(false);
  };
  const handleEnter = async (e) => {
    if (e === "Enter") {
      if (newMessage === "") return;
      const message = newMessage.length !== 0 ? newMessage : null;
      console.log("the user info", userInfo);
      await addDoc(messagesRef, {
        text: message,
        sender: {
          ...loginUser,
          displayName: userInfo.name,
          photoUrl: userInfo.avatar_url,
        },
        createdAt: new Date(),
        roomId,
      });

      setNewMessage("");

      setScroll(true);
      setScroll(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    setScroll(true);
    setScroll(false);
  }, [selected]);

  const getInfo = async () => {
    console.log("getting user info");
    const result = await axios.get(
      `http://localhost:3001/api/users/${loginUser.localId}`,
    );

    setUserInfo(result.data[0]);
  };

  useEffect(() => {
    if (loginUser) {
      getInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  useEffect(() => {
    if (Message) {
      const filterMessage = Message.sort(function (a, b) {
        // Convert Firestore Timestamps to JavaScript Date objects

        const dateA = a.createdAt.toDate();
        const dateB = b.createdAt.toDate();

        // Compare the Date objects to sort in ascending order
        return dateA - dateB;
      });

      setMessages(filterMessage);
      setScroll(true);
    }
  }, [Message, roomId]);

  if (selected.show === false) {
    return (
      <div
        className={`bg-gray-900  ${
          hide ? "hidden" : "col-span-10 md:col-span-7"
        }  rounded-lg m-2 flex flex-col h-full p-2`}
      >
        <div className="flex-grow h-[25rem]">Please Select a Chat</div>
      </div>
    );
  }

  return (
    <div
      className={`bg-gray-900  ${
        showCurrent
          ? " col-span-10 md:col-span-7"
          : "hidden md:col-span-7 md:flex"
      }  rounded-lg m-2 flex flex-col h-full p-2`}
    >
      <Header
        localId={selected.recepient_id}
        showCurrent={showCurrent}
        setShowCurrent={setShowCurrent}
        photo={selected.recepient_avatar_url}
        name={selected.recepient_name}
        email={selected.recepient_email}
      />
      <div className="flex-grow h-[25rem]">
        {messages ? (
          <div className="h-full">
            <Messages
              messages={messages}
              loginUser={loginUser}
              scroll={scroll}
              setScroll={setScroll}
            />
          </div>
        ) : (
          "Introduce yourself !!! Dont be shy"
        )}
      </div>
      <div className="bottom-0 px-4 flex">
        <MessageInput
          id={"message"}
          value={newMessage}
          stateChange={setNewMessage}
          label="Type your message here..."
          required
          submit={handleSubmit}
          enter={handleEnter}
        />
      </div>
    </div>
  );
}

export default CurrentChats;
