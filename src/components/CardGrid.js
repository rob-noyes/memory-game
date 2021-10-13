import React, { useState, useEffect } from 'react';
import Card from './Card';
import CharacterCard from './CharacterCard';

//Grid of cards that are randomzied upon mounting

const CardGrid = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  //useState for array of preset numbers
  const [character, setCharacter] = useState([]);
  const [usedCharacter, setUsedCharacter] = useState([]);
  const [numbers, setNumbers] = useState(nums);
  //useState for numbers clicked
  const [usedNumbers, setUsedNumbers] = useState([]);

  //Scores
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer -9A8LdNAZWiljS3oKHPN',
    };

    const fetchData = async () => {
      const rawCharacters = await fetch(
        'https://the-one-api.dev/v2/character?race=Hobbit,Human',
        { headers: headers }
      );
      const character = [];
      const characters = await rawCharacters.json();
      for (let i = 0; i < 12; i++) {
        character.push(characters.docs[Math.floor(Math.random() * 100)]);
      }
      setCharacter(character);
    };
    fetchData();
  }, []);

  const handleClicker = (e) => {
    console.log(e.target.value);
    if (usedCharacter.includes(e.target.value)) {
      handleReset();
      shuffleCharacters();
    } else {
      setUsedCharacter([...usedCharacter, e.target.value]);
      console.log(usedCharacter);
      shuffleCharacters();
      setCurrentScore(currentScore + 1);
    }
  };

  const handleClick = (e) => {
    //when number is clicked, checks array of clicked numbers versus target value
    if (usedNumbers.includes(e.currentTarget.value)) {
      handleReset();
      shuffleNumbers();
      //if number has not been clicked before, shuffles numbers and adds to score
    } else {
      setUsedNumbers([...usedNumbers, e.currentTarget.value]);
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

  const shuffleCharacters = () => {
    setCharacter(character.sort(() => Math.random() - 0.5));
  };

  //resets the game
  const handleReset = () => {
    checkHighScore();
    setUsedNumbers([]);
    setCurrentScore(0);
    shuffleNumbers();

    setUsedCharacter([]);
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
        {character.map((i) => {
          return (
            <CharacterCard
              value={i.name}
              name={i.name}
              race={i.race}
              gender={i.gender}
              onClick={handleClicker}
            />
          );
        })}
        {/* {numbers.map((i) => {
          return <Card key={i} num={i} onClick={handleClick} />;
        })} */}
      </div>
    </div>
  );
};

export default CardGrid;
