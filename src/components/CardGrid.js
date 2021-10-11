import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from './data/data.json';

//Grid of cards that are randomzied upon mounting

const CardGrid = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [usedNumbers, setUsedNumbers] = useState([]);

  const handleClick = (e) => {
    setUsedNumbers([...usedNumbers, e.target.value]);
  };

  return (
    <div>
      {numbers.map((i) => {
        return <Card key={i} num={i} onClick={handleClick} />;
      })}
      {console.log(usedNumbers)}
    </div>
  );
};

export default CardGrid;
