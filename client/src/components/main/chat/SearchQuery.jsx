import React, { useEffect, useState } from "react";
import UserSearchCard from "./user/UserSearchCard";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

function SearchQuery({ query, hide, getChat, setHide }) {
  const [results, setResults] = useState([]);
  const getResults = async () => {
    if (!query) return;
    console.log("query", query);
    const users = await axios.get(
      `http://localhost:3001/api/users/search/${query}`,
    );
    console.log("the search results", users);
    setResults(users.data);
  };
  useEffect(() => {
    getResults();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <div
        onClick={() => setHide(true)}
        className={`float-right cursor-pointer hover:opacity-60 text-red-600 absolute left-[0.7rem]  ${
          hide ? "hidden" : "block"
        } mt-2`}
      >
        <AiOutlineClose size={20} />
      </div>
      <div
        className={`rounded-lg absolute bg-gray-950   ${
          hide ? "hidden" : "block"
        } overflow-y-scroll h-40`}
      >
        {results.map((u) => (
          <UserSearchCard user={u} key={u.id} getChat={getChat} />
        ))}
      </div>
    </div>
  );
}
export default SearchQuery;
