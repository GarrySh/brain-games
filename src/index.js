import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfRounds = 3;

const makeGame = (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRule);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return null;
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
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
    return iter(count - 1);
  };
  return iter(numberOfRounds);
};

export default makeGame;
