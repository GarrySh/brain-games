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

const minValue = 1;
const maxValue = 39;

const getRandomNumber = () => {
  const randomNumber = (Math.random() * (maxValue - minValue)) + minValue;
  return Math.round(randomNumber);
};

const numberOfQuestions = 3;

const askOddQuestions = (userName) => {
  let i = 0;
  while (i < numberOfQuestions) {
    const currentNumber = getRandomNumber();
    const isOddNumber = (currentNumber % 2 === 0) ? 'yes' : 'no';
    showMessage(`Question: ${currentNumber}`);
    const userChoice = askQuestion('Your answer: ');
    if (userChoice === isOddNumber) {
      showMessage('Correct!');
    } else {
      showMessage(`'${userChoice}' is wrong answer ;(. Correct answer was '${isOddNumber}'.\nLet's try again, ${userName}!`);
      return;
    }
    i += 1;
  }
  showMessage(`Congratulations, ${userName}!`);
};

const startEvenGame = () => {
  showMessage('Welcome to the Brain Games!\n');
  const userName = askUserName();
  showGreeting(userName);
  askOddQuestions(userName);
};

const startBrainGames = () => {
  showMessage('Welcome to the Brain Games!\n');
  const userName = askUserName();
  showGreeting(userName);
};

export { startEvenGame, startBrainGames, askUserName, showGreeting, askOddQuestions, showMessage };
