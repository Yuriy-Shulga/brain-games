import readlineSync from 'readline-sync';

const runGameEngine = (genGameData, descriptionOfGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'Anonymous' });
  console.log(`Hello, ${userName}!`);
  console.log(descriptionOfGame);

  const roundsCount = 3;

  for (let round = 1; round <= roundsCount; round += 1) {
    const [question, correctAnswer] = genGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameEngine;
