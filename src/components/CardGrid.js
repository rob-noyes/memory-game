import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

//Grid of cards that are randomzied upon mounting

const CardGrid = () => {
  //character and usedCharacter arrays using useState
  const [character, setCharacter] = useState([]);
  const [usedCharacter, setUsedCharacter] = useState([]);

  //Scores
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer -9A8LdNAZWiljS3oKHPN',
    };
    //fetching data from TheOneAPI.dev for characters array
    const fetchData = async () => {
      const rawCharacters = await fetch(
        'https://the-one-api.dev/v2/character?race=Hobbit,Human',
        { headers: headers }
      );
      let character = [];
      const characters = await rawCharacters.json();
      for (let i = 0; character.length < 12; i++) {
        character.push(characters.docs[Math.floor(Math.random() * 200)]);
        character = character.filter((x, i, a) => a.indexOf(x) === i);
      }
      //sets the character useState with
      setCharacter(character);
    };
    fetchData();
  }, []);

  const handleClicker = (e) => {
    //When a character is clicked, checks usedCharacter array versus the targeted value
    if (usedCharacter.includes(e.target.value)) {
      //resets game and shuffles character array
      handleReset();
      shuffleCharacters();
    } else {
      //adds clicked character to usedCharacter array with spread operator
      setUsedCharacter([...usedCharacter, e.target.value]);
      console.log(usedCharacter);
      shuffleCharacters();
      setCurrentScore(currentScore + 1);
    }
  };

  const checkHighScore = () => {
    currentScore > highScore
      ? setHighScore(currentScore)
      : setHighScore(highScore);
  };

  //shuffles characters randomly based on sort method
  const shuffleCharacters = () => {
    setCharacter(character.sort(() => Math.random() - 0.5));
  };

  //resets the game
  const handleReset = () => {
    checkHighScore();
    setCurrentScore(0);
    setUsedCharacter([]);
  };

  return (
    <div className="flex justify-center flex-col items-center h-full">
      <div className="flex flex-col items-center text-3xl mx-10 pt-2">
        <h2>Current Score: {currentScore}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="pt-10 grid grid-cols-2 gap-6 max-w-6xl lg:max-w-6xl lg:grid-cols-4">
        {character.map((i) => {
          return (
            //maps through the characters, listing each as a Card component
            //Also shows scores
            <CharacterCard
              key={i._id}
              value={i.name}
              name={i.name}
              onClick={handleClicker}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardGrid;
