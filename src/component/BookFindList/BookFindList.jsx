import SingleBook from "./SingleBook";

// eslint-disable-next-line react/prop-types
const BookFindList = ({ bookItems, onFav }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bookItems.map((bookItem) => (
        <SingleBook key={bookItem.id} bookItem={bookItem} onFav={onFav} />
      ))}
    </div>
  );
};

export default BookFindList;
