import { cons, car, cdr } from 'hexlet-pairs'; // eslint-disable-line
import makeGame from '..';
import getRandomNumber from '../utils';

const getMathExpression = (value1, value2) => {
  const actionRandom = getRandomNumber(1, 3);
  if (actionRandom === 1) { return cons(`${value1} + ${value2}`, value1 + value2); }
  if (actionRandom === 2) { return cons(`${value1} - ${value2}`, value1 - value2); }
  return cons(`${value1} * ${value2}`, value1 * value2);
};

const gameRule = 'What is the result of the expression?\n';
const getGameParam = () => {
  const value1 = getRandomNumber(1, 10);
  const value2 = getRandomNumber(2, 15);
  return getMathExpression(value1, value2);
};

export default () => { makeGame(gameRule, getGameParam); };
