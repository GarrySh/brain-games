import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const iterGameRounds = (count, getQuestionAndAnswer) => {
  if (count === 0) {
    return true;
  }
  const currentQuestionAndAnswer = getQuestionAndAnswer();
  const currentAnswer = cdr(currentQuestionAndAnswer);
  const currentQuestion = car(currentQuestionAndAnswer);
  console.log(`Question: ${currentQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === currentAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.`);
    return false;
  }
  return iterGameRounds(count - 1, getQuestionAndAnswer);
};

const numberOfRounds = 3;

const makeGame = (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRule);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const gameResult = iterGameRounds(numberOfRounds, getQuestionAndAnswer);
  if (gameResult === true) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default makeGame;
