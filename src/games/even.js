import { cons } from 'hexlet-pairs'; // eslint-disable-line
import makeGame from '..';
import getRandomNumber from '../utils';

const gameRule = 'Answer "yes" if number even otherwise answer "no".\n';
const gameParam = () => {
  const currentQuestion = getRandomNumber(1, 39);
  const currentAnswer = currentQuestion % 2 === 0 ? 'yes' : 'no';
  return cons(currentQuestion, currentAnswer);
};

export default () => { makeGame(gameRule, gameParam); };
