const CharacterCard = ({ value, name, onClick }) => {
  return (
    <>
      <button
        className="py-4 mx-2 bg-gray-800 rounded-xl text-white lg:py-20 lg:px-2 lg:w-full lg:text-2xl"
        value={value}
        onClick={(e) => onClick(e)}
      >
        {name}
      </button>
    </>
  );
};

export default CharacterCard;
