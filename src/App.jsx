import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import dotenv from "dotenv";
import { useEffect } from "react";
const Api = () => {
  useEffect(() => {
    // accesss env variables

    const apiKey = process.env.API_KEY;
    const pvtVar = process.env.PVT_VAR;

    console.log("API Key", apiKey);
  }, []);
};
function App() {
  const apiKey = process.env;
  return (
    <>
      <Api />
      <Header />
      <GameBoard />
    </>
  );
}

export default App;
