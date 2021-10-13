const CharacterCard = ({ value, name, race, gender, onClick }) => {
  return (
    <>
      <button value={value} onClick={(e) => onClick(e)}>
        {name}
      </button>
    </>
  );
};

export default CharacterCard;
