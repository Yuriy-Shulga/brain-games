import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';
import { isEven } from './even.js';

const descriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let divider = 2;

  while (divider < num / 2) {
    if (num % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

const genGameData = () => {
  const question = getRandomNumber(10, 1000);

  if (isEven(question)) {
    return genGameData();
  }

  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runGameEngine(genGameData, descriptionOfGame);
};
