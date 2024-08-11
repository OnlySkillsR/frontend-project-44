import { getRandomNumber } from '../index.js';
import { launchGame } from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const trueAnswer = (numberOne, numberTwo) => {
   const minRandomNumber = Math.min(numberOne, numberTwo);
// На ноль не делим
   let result = 1;
   for (let b = 2; b <= minRandomNumber; b += 1) {
    if (numberOne % b === 0 && numberTwo % b === 0)
        result = b;
   }
   return result;

}
const scriptForEachGame = () => {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const question = `${numberOne} ${numberTwo}`
    const answer = trueAnswer(numberOne, numberTwo);

    return [question, String(answer)];
}

export const gameStarter = () => {
    launchGame(gameRule, scriptForEachGame);
}