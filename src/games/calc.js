import { getRandomNumber } from '../index.js';
import { launchGame } from '../index.js';

const gameRule = 'What is the result of the expression?';

const allOperations = ['-','+','*'];

const trueAnswer = (numberOne, numberTwo, opForGame) => {
    let corAnswer;
    switch (opForGame) {
        case '-': corAnswer = numberOne - numberTwo;
        break;
        case '+': corAnswer = numberOne + numberTwo;
        break;
        case '*': corAnswer = numberOne * numberTwo;
        break;
    }
 return corAnswer;
};

const scriptForEachGame = () => {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const opForGame = allOperations[getRandomNumber(0, allOperations.length)];
    const question = `${numberOne} ${opForGame} ${numberTwo}`;
    const answer = trueAnswer(numberOne, numberTwo, opForGame);

    return [question, String(answer)];
}

export const gameStarter = () => {
    launchGame(gameRule, scriptForEachGame);
}