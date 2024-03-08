import Card from "./Card";
import { shuffleInPlace, shuffleShallowCopy } from "../tests";
import { useState, useEffect } from "react";

const [round, setRound] = useState(0);
function GameBoard() {
  // on user click, we update round count and thus the board
  // will shuffle

  useEffect(() => {}, [round]);
  return <></>;
}

export default GameBoard;
