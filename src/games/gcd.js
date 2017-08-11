import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomNumber, makeGame } from '..';

const getGcd = (value1, value2) => {
  const iter = (maxValue, minValue, gcd) => {
    if ((maxValue % gcd === 0) && (minValue % gcd === 0)) { return gcd; }
    return iter(maxValue, minValue, gcd - 1);
  };
  if (value2 > value1) { return iter(value2, value1, value1); }
  return iter(value1, value2, value2);
};

const getQuestionAndAnswer = (value1, value2) => {
  const question = `${value1} ${value2}`;
  const answer = getGcd(value1, value2);
  return cons(question, answer);
};

const gameMessage = 'Find the greatest common divisor of given numbers.\n';
const gameParam = () => {
  const value1 = getRandomNumber(1, 50);
  const value2 = getRandomNumber(1, 50);
  const currentQuestionAndAnswer = getQuestionAndAnswer(value1, value2);
  const currentQuestion = car(currentQuestionAndAnswer);
  const currentAnswer = String(cdr(currentQuestionAndAnswer));
  return cons(currentQuestion, currentAnswer);
};

export default () => {
  makeGame(gameMessage, gameParam);
};
