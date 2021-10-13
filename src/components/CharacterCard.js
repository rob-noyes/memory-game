const CharacterCard = ({ value, name, onClick }) => {
  return (
    <>
      <button
        className="mx-2 py-4 bg-gray-800 rounded-xl text-white lg:py-20 lg:px-2 lg:w-full lg:text-2xl lg:mx-0"
        value={value}
        onClick={(e) => onClick(e)}
      >
        {name}
      </button>
    </>
  );
};

export default CharacterCard;
