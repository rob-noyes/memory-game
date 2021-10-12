//Creating a card for each "memory" item to click on.  Cards randomzed by num prop

const Card = ({ num, onClick }) => {
  return (
    <>
      <button
        className="text-4xl bg-darkblue h-28 w-28 rounded-full text-white focus:outline-none"
        value={num}
        onClick={(e) => onClick(e)}
      >
        {num}
      </button>
    </>
  );
};

export default Card;
