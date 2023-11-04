import React, { useEffect, useState } from "react";

import { collection, addDoc, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../auth/Firebase";
import { useAuth } from "../../../auth/AuthState";
//import { getUserByLocalId } from "@/database/usersCRUD/Supabase";
import MessageInput from "../../Inputs/MessageInput";
import Header from "../../semantics/Header";
import Messages from "./message/Messages";

function CurrentChats({}) {
  return (
    <div
      className={`bg-gray-900  col-span-10 md:col-span-7 rounded-lg m-2 flex flex-col h-full p-2`}
    ></div>
  );
}

export default CurrentChats;
