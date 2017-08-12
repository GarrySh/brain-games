import { cons, car, cdr } from 'hexlet-pairs'; // eslint-disable-line
import makeGame from '..';
import getRandomNumber from '../utils';

const getGcd = (value1, value2) => {
  const iter = (maxValue, minValue, gcd) => {
    if ((maxValue % gcd === 0) && (minValue % gcd === 0)) { return gcd; }
    return iter(maxValue, minValue, gcd - 1);
  };
  if (value2 > value1) {
    return iter(value2, value1, value1);
  }
  return iter(value1, value2, value2);
};

const getQuestionAndAnswer = (value1, value2) => {
  const question = `${value1} ${value2}`;
  const answer = getGcd(value1, value2);
  return cons(question, answer);
};

const gameRule = 'Find the greatest common divisor of given numbers.\n';
const gameParam = () => {
  const value1 = getRandomNumber(1, 40);
  const value2 = getRandomNumber(2, 50);
  return getQuestionAndAnswer(value1, value2);
};

export default () => { makeGame(gameRule, gameParam); };
