import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor === number) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const gameRule = 'Is this number prime? Answer "yes" or "no"';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = (isPrimeNumber(question) === true) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => makeGame(gameRule, getQuestionAndAnswer);
