import { useState, useEffect } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

import LoadingExample from "./components/LoadingExample";

function App() {
  return (
    <>
      <Header />
      <LoadingExample />
      <Gameboard />
    </>
  );
}

export default App;
