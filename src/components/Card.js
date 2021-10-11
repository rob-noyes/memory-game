//Creating a card for each "memory" item to click on.  Cards randomzed by num prop

const Card = ({ num, onClick }) => {
  return (
    <div>
      <button value={num} onClick={(e) => onClick(e)}>
        {num}
      </button>
    </div>
  );
};

export default Card;
