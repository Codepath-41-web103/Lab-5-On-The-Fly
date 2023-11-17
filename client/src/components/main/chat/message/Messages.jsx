import { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Message from "./Message";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../auth/Firebase";
import toast from "react-hot-toast";

function Messages({ messages, loginUser, scroll, setScroll }) {
  const dummy = useRef();
  const shouldScroll = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  const [docID, setDocID] = useState("");

  const messageCardRef = collection(db, "messages");

  const getDocName = async (m) => {
    const q = query(messageCardRef, where("createdAt", "==", m.createdAt));

    try {
      let docID = "";
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const documentID = doc.id;
        docID = documentID;
        setDocID(documentID);
      });
      handleDelete(docID);
    } catch (error) {
      console.error("Error querying documents: ", error);
    }
  };

  const handleDelete = (ID) => {
    if (ID) {
      const messageRef = doc(db, "messages", ID);
      deleteDoc(messageRef)
        .then(() => {
          toast.success("Successfully deleted");
        })
        .catch(() => {
          toast.error("Error deleting");
        });
    } else {
      // Handle when docID is empty or null
      console.error("Invalid docID");
    }
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

              <div
                onClick={() => getDocName(message)}
                className="cursor-pointer"
              >
                <FaRegTrashAlt size={10} />
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
