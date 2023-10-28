import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  const [contents, setContents] = useState([]);

  return (
    <>
      <NavBar setContents={setContents} />
      <Content contents={contents} />
    </>
  );
}

export default App;
