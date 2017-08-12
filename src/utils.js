const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = (Math.random() * (maxValue - minValue)) + minValue;
  return Math.round(randomNumber);
};

export default getRandomNumber;
