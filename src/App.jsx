import { useState, useEffect } from "react";
import Header from "./components/Header";
import Table from "./components/Table";

import LoadingExample from "./components/LoadingExample";

function App() {
  return (
    <>
      <Header />
      <LoadingExample />
      <Table />
    </>
  );
}

export default App;
