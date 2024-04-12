import { useState, useEffect } from "react";
import Card from "./Card";

function Gameboard() {
  const [round, setRound] = useState(1);
  const [loading, isLoading] = useState(true);

  let array = [1, 2, 3, 4, 5, 6];
  // on mount and when round count increases.. fetch new cards
  useEffect(() => {}, [round]);
  //if loading state is true - render skeleton
  //if loading is false, render real cards
  // fetch 6 images from an api at random(ish)
  // store as array of 6
  // create an object for each card, with a boolean isClicked

  // randomise order
  // pass index as a prop to a card to display image
  return (
    <>
      <div>This is a card</div>
      <Card name={array[0]} />
      <Card img="https://picsum.photos/id/237/200/300" />
      <Card name={name} />
    </>
  );
}
export default Gameboard;
