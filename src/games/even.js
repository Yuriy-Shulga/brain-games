import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

const genGameData = () => {
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGameEngine(genGameData, descriptionOfGame);
};
