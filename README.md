# memory-card-game

This is a small card game where you need to remember the ones you have clicked. Do not click the same one twice!

Spec:

input:

- when the user clicks a card which has not been clicked before, add a point
- if the user clicks a card they have clicked before, it's game over

computation:

- when a user clicks a card, check if card has been clicked before. If it has, game over. If it hasnt, add a point and shuffle the card arrangement

tech used:

- JS
- React
- CSS

Todo:

- create a clock using useEffect to learn useEffect
- delete clock

- plan how to use this in card game with pseudocode
- create basic layout structure

on page load, fetch cards from api, store as card objects in an array.

after click, set clicked to true on that card

shuffle the cards

when correctcards === 9 you WIN -game over, reset game

if card clicked and clicked== true then GAME OVER you lose..

Problem 1:

Hiding API Key

-- use environment variables
-- use dotenv package which is a library or tool that helps us manage them
