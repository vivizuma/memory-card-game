import { useState, useEffect } from "react";
import Card from "./Card";
import "./Gameboard.css";

function Gameboard() {
  const [loading, setLoading] = useState(true);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);

  const [streak, setStreak] = useState(0);
  const [statusText, setStatusText] = useState("Click a card to begin");
  const [pokemonArray, setPokemonArray] = useState([]);
  // after loading the 9 pokemon we can
  // create an array of objects with the property name and isClicked
  // every click we loop through this arry and if clicked = false, change to true
  // if clicked == true, then game over, fetch new pokemon

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

  // start the game
  // fetch from api once when component mounts []
  useEffect(() => {
    const fetchData = async () => {
      setRound(1);
      const randomArray = createRandomArray(9);

      const pokemons = await getPokemon(randomArray);
      setPokemonArray(pokemons);
      console.log(pokemons);
      console.log("pokemonState", pokemonArray);
      setLoading(false);
    };

    fetchData();
  }, []);
  // takes an array of numbers, uses them as the indexes for items to be fetched from the api
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
  const incrementRounds = () => {
    setRound(round + 1);
    console.log(round);
  };
  function checkIsClicked(name) {
    // look at pokemon array in state and check if clicked, if clicked, return true, if not, return false
    // loop through state array, if this name is clicked - return true, if not return false
  }
  const handleClick = (name) => {
    console.log(name, "clicked");
    console.log(pokemonArray);

    // if clicked == false - updateClickedStatus, increment points
    if (!checkIsClicked()) {
      updateClickedStatus(name);
      incrementRounds();
    }
    // if clicked == true - game over
    gameOver();

    // check game status win or lose
  };
  function gameOver() {
    console.log("you clicked the same one twice, you lose");
    // set streak to 0
    setStreak(0);
    // display lose message
    setStatusText("Game Over!");
    // render try again button
  }
  function nextRound() {
    // shuffle pokemon cards,
    // increment score by 1
  }
  function nextGame() {
    // reset states except streak
    // fetch new pokemon
  }
  function updateClickedStatus(name) {
    setPokemonArray((prevPokemon) =>
      prevPokemon.map((item) =>
        item.name === name ? { ...item, clicked: true } : item
      )
    );
  }
  if (loading) {
    return <>LOADING!</>;
  } else {
    return (
      <>
        <div className="gameboard">
          <div className="gameboard-grid">
            {pokemonArray.map((card) => (
              <Card
                key={card.name}
                name={card.name}
                img={card.img}
                onClick={() => {
                  handleClick(card.name);
                }}
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
// random shuffle function
// render pokemon cards
// basic pokemon card styling
// handleClick function
