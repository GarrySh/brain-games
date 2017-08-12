import { cons, car, cdr } from 'hexlet-pairs'; // eslint-disable-line
import makeGame from '..';
import getRandomNumber from '../utils';

const getProgression = (number) => {
  const step = getRandomNumber(5, 20);
  const position = getRandomNumber(0, 9);
  const firstNumber = number - (step * position);
  const iter = (currentPosition, acc) => {
    if (currentPosition === 10) {
      return acc;
    }
    if (currentPosition === position) {
      return iter(currentPosition + 1, `${acc}.. `);
    }
    return iter(currentPosition + 1, `${acc + String(firstNumber + (step * currentPosition))} `);
  };
  return iter(0, '');
};

const gameRule = 'Balance the given number.';
const getQuestionAndAnswer = () => {
  const answer = getRandomNumber(20, 100);
  const question = getProgression(answer);
  return cons(question, answer);
};

export default () => { makeGame(gameRule, getQuestionAndAnswer); };
