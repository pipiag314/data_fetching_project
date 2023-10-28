import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { fetchAPI } from "./fetchAPI";

const NavBar = ({ setContents }) => {
  const URL = "https://jsonplaceholder.typicode.com/";
  const [endPoint, setEndPoint] = useState("users");

  useEffect(() => {
    async function fetchData() {
      try {
        setContents(await fetchAPI(`${URL}${endPoint}`));
      } catch (error) {
        console.log("Erorr:", error);
      }
    }
    fetchData();
  }, [endPoint]);

  return (
    <div className="NavBar">
      <button onClick={() => setEndPoint("users")}>Users</button>
      <button onClick={() => setEndPoint("posts")}>Posts</button>
      <button onClick={() => setEndPoint("comments")}>Comments</button>
    </div>
  );
};

export default NavBar;
