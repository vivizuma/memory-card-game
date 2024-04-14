import { useState, useEffect } from "react";
import Card from "./Card";

function Table() {
  const [round, setRound] = useState(1);
  const [loading, isLoading] = useState(true);
  const [pokemonArray, setPokemonArray] = useState([]);
  function getRandomInteger(min, max) {
    const minCeiling = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random());
  }
  async function getPokemon() {
    // generate 9 random unique numbers between 1-151 (original pokemon) and store them in an array
    let randomNumbersArray = [];
    // loop through this array fetching a pokemon and creating an object for each pokemon
    for (let i = 0; i < 9; i++) {
      // random integer between 1 and 151 for OG Pokemon

      let num = Math.floor(Math.random() * 151) + 1;
      randomNumbersArray.push(num);
    }

    async function fetchPokemon(arr) {
      const pokemonArray = [];
      for (let i = 0; i < arr.length; i++) {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${arr[i]}`
        );
        pokemonArray.push(pokemon);
      }
    } //// YOU STOPPED HERE
    // TODO:
    // get array of pokemon
    // get photo of each pokemon, name, id and store it in array of objects
    // update object state, update loading state.
    // create cards with fetched data
    // design game logic
    // finish  project and move on
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    if (!response.ok) {
      console.log("Error getting pokemon");
      throw new Error("response bad", Error.name);
    }
    const data = await response.json();
    console.log(data);
  }
  // on mount and when round count increases.. fetch new cards
  useEffect(() => {
    getPokemon();
  }, []);

  //if loading state is true - render skeleton
  //if loading is false, render real cards
  // fetch 6 images from an api at random(ish)
  // store as array of 6
  // create an object for each card, with a boolean isClicked
  console.log("heu");
  // randomise order
  // pass index as a prop to a card to display image
  return (
    <>
      <div>This is a card</div>

      <Card img="https://picsum.photos/id/237/200/300" />
      <Card name={name} />
    </>
  );
}

export default Table;
