import { getRandomNumber } from '../index.js';
import { launchGame } from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (randomNum) => {
    if (randomNum <= 1)
        return false;
    for (let i = 2; i < randomNum; i += 1) {
        if (randomNum % i === 0)
            return false;
    }
    return true;
}

const scriptForEachGame = () => {
    const question = getRandomNumber();
    const trueAnswer = isPrimeNum(question) ? 'yes' : 'no';

    return [question, trueAnswer];
};

export const gameStarter = () => {
    launchGame(gameRule, scriptForEachGame);
};