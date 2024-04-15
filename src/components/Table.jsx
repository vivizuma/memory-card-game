import { useState, useEffect } from "react";
import Card from "./Card";

function Table() {
  const [round, setRound] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pokemonArray, setPokemonArray] = useState([]);
  async function fetchPokemon(arr) {
    const pokemonArray = [];
    for (let i = 0; i < arr.length; i++) {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${arr[i]}`
      );
      if (!pokemon.ok) {
        throw new Error("Error getting response:", pokemon.status);
      }
      const pokemonData = await pokemon.json();

      pokemonArray.push(pokemonData.name);
    }
    return pokemonArray;
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
    const pokemans = await fetchPokemon(randomNumbersArray);
    console.log(pokemans);

    //// YOU STOPPED HERE
    // TODO:
    // get array of pokemon
    // get photo of each pokemon, name, id and store it in array of objects
    // update object state, update loading state.
    // create cards with fetched data
    // design game logic
    // finish  project and move on
  }
  // on mount and when round count increases.. fetch new cards
  useEffect(() => {
    const pokemonNames = getPokemon();
    console.log(pokemonNames);
  }, []);

  // pass index as a prop to a card to display image
  return (
    <>
      <Card name={pokemonNames[1]} />
    </>
  );
}

export default Table;
