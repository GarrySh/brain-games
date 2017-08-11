import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = (Math.random() * (maxValue - minValue)) + minValue;
  return Math.round(randomNumber);
};

const numberOfRounds = 3;

const makeGame = (gameMessage, gameOptions) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let i = 0;
  while (i < numberOfRounds) {
    const currentOption = gameOptions();
    console.log(`Question: ${car(currentOption)}`);
    const userChoice = readlineSync.question('Your answer: ');
    if (userChoice === cdr(currentOption)) {
      console.log('Correct!');
    } else {
      console.log(`'${userChoice}' is wrong answer ;(. Correct answer was '${cdr(currentOption)}'.\nLet's try again, ${userName}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export { makeGame, getRandomNumber };
