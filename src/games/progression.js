import { getRandomNumber } from '../index.js';
import { launchGame } from '../index.js';

const gameRule = 'What number is missing in the progression?';

const scriptForEachGame = () => {
    const progressionLength = getRandomNumber(5, 10);
    const progressionStep = getRandomNumber(1, 10);
    const progressionStart = getRandomNumber();
    const missNumber = getRandomNumber(0, progressionLength);
    
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
        progression.push(progressionStart + progressionStep * i);
    }

    const answer = progression[missNumber];
    progression[missNumber] = '..';
    const question = progression.join(' ');
    
    return [question, String(answer)];

}

export const gameStarter = () => {
    launchGame(gameRule, scriptForEachGame);
}