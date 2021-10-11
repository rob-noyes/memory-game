import React, { useState } from 'react';
import Card from './Card';

//Grid of cards that are randomzied upon mounting

const CardGrid = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const [numbers, setNumbers] = useState(nums);
  const [usedNumbers, setUsedNumbers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    if (usedNumbers.includes(e.target.value)) {
      handleReset();
      shuffleNumbers();
    } else {
      setUsedNumbers([...usedNumbers, e.target.value]);
      shuffleNumbers();
      setCurrentScore(currentScore + 1);
    }
    currentScore < highScore
      ? setHighScore(highScore)
      : setHighScore(currentScore);
  };

  const shuffleNumbers = () => {
    setNumbers(nums.sort(() => Math.random() - 0.5));
  };

  const handleReset = () => {
    setUsedNumbers([]);
    setCurrentScore(0);
    shuffleNumbers();
  };

  return (
    <div>
      {numbers.map((i) => {
        return <Card key={i} num={i} onClick={handleClick} />;
      })}
      <p> {currentScore}</p>
      {highScore}
      {console.log(usedNumbers)}
    </div>
  );
};

export default CardGrid;
