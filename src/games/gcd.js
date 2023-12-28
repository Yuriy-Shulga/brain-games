import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }

  return getGreatestCommonDivisor(num2, num1 % num2);
};

const genGameData = () => {
  const num1 = getRandomNumber(1, 1000);
  const num2 = getRandomNumber(1, 1000);

  const gcd = getGreatestCommonDivisor(num1, num2);

  if (gcd === 1) {
    return genGameData();
  }

  const answer = String(gcd);

  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => {
  runGameEngine(genGameData, descriptionOfGame);
};
