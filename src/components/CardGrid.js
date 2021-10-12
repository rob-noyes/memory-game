import React, { useState } from 'react';
import Card from './Card';

//Grid of cards that are randomzied upon mounting

const CardGrid = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  //useState for array of preset numbers
  const [numbers, setNumbers] = useState(nums);
  //useState for numbers clicked
  const [usedNumbers, setUsedNumbers] = useState([]);

  //Scores
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    //when number is clicked, checks array of clicked numbers versus target value
    if (usedNumbers.includes(e.target.value)) {
      handleReset();
      shuffleNumbers();
      //if number has not been clicked before, shuffles numbers and adds to score
    } else {
      setUsedNumbers([...usedNumbers, e.target.value]);
      shuffleNumbers();
      setCurrentScore(currentScore + 1);
    }
    //checks if the current game is a new high score
  };

  const checkHighScore = () => {
    currentScore > highScore
      ? setHighScore(currentScore)
      : setHighScore(highScore);
  };

  //function to shuffle numbers based on a sort method
  const shuffleNumbers = () => {
    setNumbers(nums.sort(() => Math.random() - 0.5));
  };

  //resets the game
  const handleReset = () => {
    checkHighScore();
    setUsedNumbers([]);
    setCurrentScore(0);
    shuffleNumbers();
  };

  return (
    //maps through the numbers, listing each as a Card component
    //Also shows scores
    <div className="flex justify-center flex-col items-center h-full">
      <div className="flex flex-col items-center text-3xl mx-10 pt-2">
        <h2>Current Score: {currentScore}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="pt-10 grid grid-cols-2 gap-12 max-w-6xl lg:grid-cols-4">
        {numbers.map((i) => {
          return <Card key={i} num={i} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default CardGrid;
