import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomNumber, makeGame } from '..';

const getAction = (value1, value2) => {
  const actionRandom = getRandomNumber(1, 3);
  if (actionRandom === 1) { return cons(value1 + value2, `${value1} + ${value2}`); }
  if (actionRandom === 2) { return cons(value1 - value2, `${value1} - ${value2}`); }
  return cons(value1 * value2, `${value1} * ${value2}`);
};

const gameMessage = 'What is the result of the expression?\n';
const gameParam = () => {
  const value1 = getRandomNumber(1, 10);
  const value2 = getRandomNumber(1, 10);
  const currentAction = getAction(value1, value2);
  const currentQuestion = cdr(currentAction);
  const currentAnswer = String(car(currentAction));
  return cons(currentQuestion, currentAnswer);
};

export default () => {
  makeGame(gameMessage, gameParam);
};
