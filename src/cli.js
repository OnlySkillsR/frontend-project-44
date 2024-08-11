/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
const askName = () => {
  const name = readlineSync.question('May I have your name? ');

  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
};

export default askName;