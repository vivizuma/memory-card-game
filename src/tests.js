// shuffle the cards

const cards = [
  { name: "pikachu", number: 1 },
  { name: "charizard", number: 2 },
  { name: "squirtle", number: 3 },
  { name: "golem", number: 4 },
  { name: "Diglet", number: 5 },
  { name: "Bulbasaur", number: 6 },
  { name: "Mew Two", number: 7 },
  { name: "Mew", number: 8 },
];

// shuffle and return a shallow copy
function shuffleShallowCopy(arr) {
  const arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length; i++) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const j = randomNumber;
    if (j === i) {
      continue;
    }
    const saved = arrCopy[j];
    arrCopy[j] = arrCopy[i];
    arrCopy[i] = saved;
  }
  return arrCopy;
}
// shuffle in place
function shuffleInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const j = randomNumber;
    if (j === i) {
      continue;
    }
    const saved = arr[j];
    arr[j] = arr[i];
    arr[i] = saved;
  }
}

export { shuffleInPlace, shuffleShallowCopy };
