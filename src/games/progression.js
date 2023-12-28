import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const descriptionOfGame = 'What number is missing in the progression?';

const genProgression = (firstElement, lengthProgression, stepProgression) => {
  const progression = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(firstElement + stepProgression * i);
  }

  return progression;
};

const hiddenSmbl = '..';

const genGameData = () => {
  const firstElement = getRandomNumber(1, 50);
  const lengthProgression = getRandomNumber(5, 10);
  const stepProgression = getRandomNumber(1, 50);

  const progression = genProgression(firstElement, lengthProgression, stepProgression);
  const hiddenElemntIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenElemntIndex]);
  progression[hiddenElemntIndex] = hiddenSmbl;
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  runGameEngine(genGameData, descriptionOfGame);
};
