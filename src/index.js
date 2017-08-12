import readlineSync from 'readline-sync'; // eslint-disable-line
import { car, cdr } from 'hexlet-pairs'; // eslint-disable-line

const numberOfRounds = 3;

const makeGame = (gameMessage, gameOptions) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (round) => {
    if (round === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const currentOption = gameOptions();
    const currentAnswer = String(cdr(currentOption));
    const currentQuestion = car(currentOption);
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === currentAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.\nLet's try again, ${userName}!`);
    }
    return iter(round - 1);
  };
  return iter(numberOfRounds);
};

export default makeGame;
