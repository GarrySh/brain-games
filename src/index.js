import readlineSync from 'readline-sync';

const askQuestion = (questionForUser) => {
  const result = readlineSync.question(questionForUser);
  return result;
};

const showMessage = (message) => { console.log(message); };

const askUserName = () => { askQuestion('May I have your name? '); };

const showGreeting = () => { showMessage(`Hello, ${askUserName()}!\n`); };

const getRandomNumber = () => {
  const MINVALUE = 1;
  const MAXVALUE = 39;
  const randomNumber = (Math.random() * (MAXVALUE - MINVALUE)) + MINVALUE;
  return Math.round(randomNumber);
};

const askOddQuestions = () => {
  const NUMBEROFQUESTIONS = 3;
  const currentNumber = getRandomNumber();
  const isOddNumber = (currentNumber % 2 === 0) ? 'yes' : 'no';
  showMessage(`Question: ${currentNumber}`);
  const userChoice = askQuestion('Your answer: ');
  if (userChoice === isOddNumber) {
    showMessage('Correct!');
  } else {
    showMessage(`'${userChoice}' is wrong answer ;(. Correct answer was '${isOddNumber}'.\nLet's try again, ${askUserName}!`);
  }
};


export { askUserName, showGreeting, askOddQuestions, showMessage };
