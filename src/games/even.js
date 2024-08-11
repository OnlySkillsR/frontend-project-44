import { getRandomNumber } from '../index.js';
import { launchGame } from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no" ';

 const scriptForEachGame = () => {
    const question = getRandomNumber();
    const isEvenNumber = (number) => number % 2 === 0;
    const trueAnswer = isEvenNumber(question) ? 'yes' : 'no';

    return [question, trueAnswer];
};

export const gameStarter = () => {
    launchGame(gameRule, scriptForEachGame);
};