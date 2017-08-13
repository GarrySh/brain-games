import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const gameRule = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const value1 = getRandomNumber(1, 10);
  const value2 = getRandomNumber(2, 15);
  const actionRandom = getRandomNumber(1, 3);
  if (actionRandom === 1) {
    return cons(`${value1} + ${value2}`, String(value1 + value2));
  }
  if (actionRandom === 2) {
    return cons(`${value1} - ${value2}`, String(value1 - value2));
  }
  return cons(`${value1} * ${value2}`, String(value1 * value2));
};

export default () => makeGame(gameRule, getQuestionAndAnswer);
