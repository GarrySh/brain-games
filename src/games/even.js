import { cons } from 'hexlet-pairs';
import { getRandomNumber, makeGame } from '..';

const gameMessage = 'Answer "yes" if number even otherwise answer "no".\n';
const gameParam = () => {
  const currentQuestion = getRandomNumber(1, 39);
  const currentAnswer = currentQuestion % 2 === 0 ? 'yes' : 'no';
  return cons(currentQuestion, currentAnswer);
};

export default () => {
  makeGame(gameMessage, gameParam);
};
