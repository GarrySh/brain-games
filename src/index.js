import readlineSync from 'readline-sync';

const askQuestion = (questionForUser) => {
  const result = readlineSync.question(questionForUser);
  return result;
};

const showMessage = (message) => { console.log(message); };

const askUserName = () => {
  const result = askQuestion('May I have your name? ');
  return result;
};

const showGreeting = (userName) => { showMessage(`Hello, ${userName}!\n`); };

const getRandomNumber = () => {
  const MINVALUE = 1;
  const MAXVALUE = 39;
  const randomNumber = (Math.random() * (MAXVALUE - MINVALUE)) + MINVALUE;
  return Math.round(randomNumber);
};

const askOddQuestions = (userName) => {
  const NUMBEROFQUESTIONS = 3;
  let i = 0;
  while (i <= NUMBEROFQUESTIONS) {
    if (i === NUMBEROFQUESTIONS) {
      showMessage(`Congratulations, ${userName}!`);
      break;
    }
    const currentNumber = getRandomNumber();
    const isOddNumber = (currentNumber % 2 === 0) ? 'yes' : 'no';
    showMessage(`Question: ${currentNumber}`);
    const userChoice = askQuestion('Your answer: ');
    if (userChoice === isOddNumber) {
      showMessage('Correct!');
    } else {
      showMessage(`'${userChoice}' is wrong answer ;(. Correct answer was '${isOddNumber}'.\nLet's try again, ${userName}!`);
      break;
    }
    i += 1;
  }
};

export { askUserName, showGreeting, askOddQuestions, showMessage };
