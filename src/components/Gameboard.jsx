import { useState, useEffect } from "react";
import Card from "./Card";
import "./Gameboard.css";
function Gameboard() {
  const [loading, setLoading] = useState(true);
  const [round, setRounds] = useState(0);
  const [score, setScore] = useState(0);
  function checkWin() {}
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function createRandomArray(length) {
    let arr = [];
    while (arr.length < length) {
      let num = getRandomNumber(1, 151);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }
    return arr;
  }

  const [pokemon, setPokemon] = useState([]);

  // start the game

  useEffect(() => {
    const fetchData = async () => {
      setRounds(1);
      const randomArray = createRandomArray(9);

      const pokemons = await getPokemon(randomArray);
      setPokemon(pokemons);
      console.log(pokemons);
      console.log("pokemonState", pokemon);
      setLoading(false);
    };

    fetchData();
  }, []);
  function renderCards() {
    return (currentCards = pokemon.map((item, index) => {
      <Card key={index} img={item.img}></Card>;
    }));
  }
  // every time the component rerenders, a game state check will take place

  // ge pokemon via api and store them as objects in state
  async function getPokemon(array) {
    const pokemonArray = [];
    for (let i = 0; i < array.length; i++) {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${array[i]}`
      );
      if (!pokemon.ok) {
        throw new Error("Error getting response", pokemon.status);
      }
      const pokemonJSON = await pokemon.json();
      const pokemonObject = {
        id: i,
        name: pokemonJSON.name,
        img: pokemonJSON.sprites.other.home.front_default,
        clicked: false,
      };
      pokemonArray.push(pokemonObject);
    }
    console.log(pokemonArray);
    return pokemonArray;
  }

  function copyArrayAndShuffle(arr) {
    // first make a shallow copy with the spread operator
    let arr2 = [...arr];
    for (let i = arr2.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [arr2[i], arr2[randomIndex]] = [arr2[randomIndex], arr2[i]];
    }
    return arr2;
  }
  function handleClick() {
    if (!pokemon[index].clicked) {
      // shuffle cards
      console.log("Card unclicked, shuffling cards and incrementing points");
      // increase score
    } else {
      // game over
      // start new round
    }
  }
  let pokemonCards = [];
  if (loading) {
    return <>LOADING!</>;
  } else {
    return (
      <>
        <div className="gameboard">
          <div className="gameboard-grid">
            {pokemon.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                img={card.img}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Gameboard;

// TODO TODAY::
// css grid  the cards
// random shuffle function
// render pokemon cards
// basic pokemon card styling
// handleClick function
