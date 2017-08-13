import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const isNumberPrime = (number) => {
  if (number < 3) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor === 1) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor - 1);
  };
  return iter(number - 1);
};


const gameRule = 'Is this number prime? Answer "yes" or "no"';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = (isNumberPrime(question) === true) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => makeGame(gameRule, getQuestionAndAnswer);
