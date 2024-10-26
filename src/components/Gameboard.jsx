import { useState, useEffect } from "react";
import Card from "./Card";
import "./Gameboard.css";

function Gameboard() {
  const [loading, setLoading] = useState(true);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

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
      setRound(0);
      const randomArray = createRandomArray(9);

      const pokemonArray = await getPokemon(randomArray);
      setPokemonArray(pokemonArray);
      console.log(pokemonArray);
      console.log("pokemonState", pokemonArray);
      setLoading(false);
    };

    fetchData();
  }, [gamesPlayed]);
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
    setRound((prevRound) => prevRound + 1);
    console.log(round);
  };
  function checkIsClicked(name) {
    // look at pokemon array in state and check if clicked, if clicked, return true, if not, return false
    let foundItem = pokemonArray.find((item) => item.name === name);
    if (foundItem.clicked) {
      return true;
    }
    return false;
    // loop through state array, if this name is clicked - return true, if not return false
  }
  const handleClick = (name) => {
    console.log(name, "clicked");
    console.log(pokemonArray);

    // if clicked == false - updateClickedStatus, increment points
    if (!checkIsClicked(name)) {
      updateClickedStatus(name);
      nextRound();
      return;
    }
    // if clicked == true - game over
    gameOver();

    // check game status win or lose
  };
  function gameOver() {
    console.log("you clicked the same one twice, you lose");
    setRound(1);
    // set streak to 0
    setStreak(0);
    // display lose message
    setStatusText("Game Over!");
    nextGame();
    // render try again button
  }
  function nextRound() {
    // shuffle pokemon cards, shuffle in state
    // increment score by 1
    // check win
    checkWin();
    incrementRounds();
  }
  function checkWin() {
    // if round == 9 and
    // all pokemon are clicked
    // game win
    if (round === 8) {
      gameWin();
    }
  }
  function gameWin() {
    // you win
    console.log("you win");
    //increment streak
    setStreak((prevStreak) => prevStreak + 1);
    // increment games played
    setGamesPlayed((prevGamesPlayed) => prevGamesPlayed + 1);
  }
  function nextGame() {
    // reset states except streak
    console.log("next game");
    setGamesPlayed((gamesPlayedValue) => gamesPlayedValue + 1);
    // fetch new pokemon with dependency!
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
        <h2>
          round:{round} streak: {streak}
        </h2>
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

// TODO:

// disable event listeners until api call is complete
