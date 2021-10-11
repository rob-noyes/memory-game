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
    currentScore < highScore
      ? setHighScore(highScore)
      : setHighScore(currentScore);
  };

  //function to shuffle nukbers based on a sort method
  const shuffleNumbers = () => {
    setNumbers(nums.sort(() => Math.random() - 0.5));
  };

  //resets the game
  const handleReset = () => {
    setUsedNumbers([]);
    setCurrentScore(0);
    shuffleNumbers();
  };

  return (
    //maps through the numbers, listing each as a Card component
    //Also shows scores
    <div>
      <h2>{currentScore}</h2>
      <h2>{highScore}</h2>
      <div>
        {numbers.map((i) => {
          return <Card key={i} num={i} onClick={handleClick} />;
        })}
      </div>
      {console.log(usedNumbers)}
    </div>
  );
};

export default CardGrid;
