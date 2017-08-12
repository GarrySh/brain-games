import { cons } from 'hexlet-pairs'; // eslint-disable-line
import makeGame from '..';
import getRandomNumber from '../utils';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 39);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => { makeGame(gameRule, getQuestionAndAnswer); };
