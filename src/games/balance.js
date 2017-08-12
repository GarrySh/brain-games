import { cons, car, cdr } from 'hexlet-pairs'; // eslint-disable-line
import makeGame from '..';
import getRandomNumber from '../utils';

const getSumOfCharInNumber = (number) => {
  const iter = (num, acc) => {
    const numToString = String(num);
    if (numToString.length === 0) {
      return acc;
    }
    return iter(numToString.substring(1), acc + Number(numToString[0]));
  };
  return iter(number, 0);
};

const getBalance = (number) => {
  const numberLength = String(number).length;
  const sumOfCharInNumber = getSumOfCharInNumber(number);
  const averageNumber = Math.floor(sumOfCharInNumber / numberLength);
  const balance = sumOfCharInNumber % numberLength;
  const iter = (len, acc) => {
    if (len === 0) {
      return acc;
    }
    if (len > balance) {
      return iter(len - 1, acc + averageNumber);
    }
    return iter(len - 1, acc + Number(averageNumber + 1));
  };
  return iter(numberLength, '');
};

const getQuestionAndAnswer = (value) => {
  const question = value;
  const answer = getBalance(value);
  return cons(question, answer);
};

const gameRule = 'Balance the given number.\n';
const gameParam = () => {
  const value = getRandomNumber(100, 1999);
  return getQuestionAndAnswer(value);
};

export default () => { makeGame(gameRule, gameParam); };
