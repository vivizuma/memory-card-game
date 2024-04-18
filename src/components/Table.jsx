import { useState, useEffect } from "react";
import Card from "./Card";


function Table() {
  const [round, setRound] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pokemonArray, setPokemonArray] = useState([]);

  function handlePokemonArray(array) {
    setPokemonArray(array);
  }
  console.log("pokemon array", pokemonArray);
  useEffect(() => {
    handlePokemonArray([1, 2, 3]);
  }, []);

  console.log("pokemonArray", pokemonArray);
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
      // LEFT OFF HERE
      // create an object

      pokemonArray.push(pokemonData.sprites.other.home.front_default);
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
    return pokemans;
  }
  // on mount and when round count increases.. fetch new cards
  useEffect(() => {
    const pokemonNames = getPokemon();
    console.log(pokemonNames);
  }, []);

  // pass index as a prop to a card to display image
  return (
    <>
      <Card></Card>
    </>
  );
}

export default Table;
