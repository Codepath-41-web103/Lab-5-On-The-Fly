import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchQuery from "../SearchQuery.jsx";

function UserSearch({ getChat }) {
  const [hide, setHide] = useState(true);
  const [query, setQuery] = useState("");
  const [apiQuery, setApiQuery] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length) {
        setApiQuery(query);
        setTyping(false);
        setHide(false);
      } else {
        setHide(true);
        setTyping(false);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleOnChange = (event) => {
    setQuery(event.target.value);
    setTyping(true);
  };

  return (
    <div className="z-50">
      <div className="bg-gray-300 rounded-lg grid grid-cols-10 w-full">
        <input
          onChange={(e) => handleOnChange(e)}
          className="rounded-lg bg-gray-300 col-span-8 outline-blue-500 p-1"
          placeholder="Search for Users"
        />

        <div className="  col-span-2 border-l border-white flex justify-center items-center cursor-pointer hover:opacity-60">
          <FaSearch />
        </div>
      </div>
      <div className="px-5">
        {typing ? (
          <div className="absolute">Loading</div>
        ) : (
          <div className="w-45">
            {" "}
            <SearchQuery
              query={apiQuery}
              hide={hide}
              getChat={getChat}
              setHide={setHide}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default UserSearch;
