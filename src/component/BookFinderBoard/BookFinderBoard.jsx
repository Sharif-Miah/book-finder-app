import { useState } from "react";
import BookImg from "../../assets/book.png";
import BookFindAction from "../BookFindAction/BookFindAction";
import BookFindList from "../BookFindList/BookFindList";

const BookFinderBoard = () => {
  const bookLists = [
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "JavaScript and Jquery",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "JavaScript and React",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "Python and TypeScript",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "JavaScript and NodeJS",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "Java and Rube",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "Django and NET",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "HTML and CSS",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
    {
      id: crypto.randomUUID(),
      img: BookImg,
      title: "Java and C++",
      autorName: "By : Jon Duckett",
      price: 62,
      isFavorit: false,
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [bookItems, setBookItems] = useState(bookLists);

  const handleFavorit = (indexId) => {
    const findIndex = bookItems.findIndex(
      (bookItem) => bookItem.id === indexId
    );
    const newBookItems = [...bookItems];
    newBookItems[findIndex].isFavorit = !newBookItems[findIndex].isFavorit;
    setBookItems(newBookItems);
  };

  const handleSearchValue = (searchText) => {
    const filterd = bookItems.filter((bookItem) =>
      bookItem.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setBookItems([...filterd]);
  };

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <BookFindAction onSearch={handleSearchValue} />
      </header>

      <BookFindList bookItems={bookItems} onFav={handleFavorit} />
    </main>
  );
};

export default BookFinderBoard;
