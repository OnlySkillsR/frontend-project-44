import readlineSync from 'readline-sync';

export const getRandomNumber = (mn = 0, mx = 100) => Math.floor(Math.random() * mx) + mn;

export const launchGame = (gameRule, scriptForEachGame) => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);

    console.log(gameRule);

    const allRoundCount = 3;

    for (let i = 0; i < allRoundCount; i += 1) {
        let roundGame = scriptForEachGame();
        const [question, trueAnswer] = roundGame;
        console.log(`Question: ${question}`);
        const gamerAnswer = readlineSync.question('Your answer: ');

        if (gamerAnswer === trueAnswer) {
            console.log('Correct!');
        } else {
            console.log(` "${gamerAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
            console.log(`Let's try again, ${playerName}`);

            return;
        }
    }
    
    console.log(`Congratulations, ${playerName}!`);
};