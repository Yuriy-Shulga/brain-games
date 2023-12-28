import runGameEngine from '../index.js';
import getRandomNumber from '../utilits.js';

const operators = ['+', '-', '*'];
const descriptionOfGame = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'an unknown operator';
  }
};

const genGameData = () => {
  const indexOfOperator = getRandomNumber(1, operators.length) - 1;
  const operator = operators[indexOfOperator];
  const num1 = getRandomNumber(1, 1000);
  const num2 = getRandomNumber(1, 1000);

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calc(num1, num2, operator));
  return [question, answer];
};

export default () => {
  runGameEngine(genGameData, descriptionOfGame);
};
