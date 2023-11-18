"use client"
import React, { useEffect, useState, Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import SearchQuery from "../SearchQuery.jsx";
import { Form, Input } from "../../../semantics/index.js";
import PropTypes from 'prop-types'
import { Button } from "../../../semantics/index.js";
import './UserSearch.scss'

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
    <Fragment>
      <Form className="flex items-center justify-between w-full bg-gray-300 rounded-lg h-fit">
        <Input
          onChange={(e) => handleOnChange(e)}
          className="w-[80%] h-full text-sm bg-transparent border-none rounded-lg focus:outline-none focus:ring-0 mb-0 p-0"
          placeholder="Search for Users"
          type="text"
        />
        <Button className="w-[20%] h-full m-0 p-[1rem] bg-blue-400">
          <FaSearch className="flex items-center justify-center w-full cursor-pointer hover:opacity-60" />
        </Button>
        {typing ? (
          <div className="absolute px-5">Loading</div>
        ) : (
          <div className="px-5 w-45">
            {" "}
            <SearchQuery
              query={apiQuery}
              hide={hide}
              getChat={getChat}
              setHide={setHide}
            />
          </div>
        )}
      </Form>
    </Fragment>
  );
}

UserSearch.propTypes = {
  getChat: PropTypes.func.isRequired,
}

export default UserSearch;
