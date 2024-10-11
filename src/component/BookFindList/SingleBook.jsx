import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
const SingleBook = ({ bookItem, onFav }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px]" src={bookItem.img} alt="book name" />
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{bookItem.title}</h4>
        <p className="text-xs lg:text-sm">{bookItem.autorName}</p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${bookItem.price}</h4>

          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <span className="text-xs lg:text-sm">(4 Star)</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <IoCartSharp className="text-xl" />
            Add to Cart
          </button>

          {/* <button
            onClick={() => onFav(bookItem.id)}
            className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
          >
            {bookItem.isFavorit ? (
              <>
                <FaRegHeart className="text-xl" />
              </>
            ) : (
              <>
                <FaRegHeart className="text-xl text-[#1C4336]" />
              </>
            )}
            Favourite
          </button> */}

          <button
            className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
            onClick={() => onFav(bookItem.id)}
          >
            {bookItem.isFavorit ? (
              <FaHeart className="text-xl text-[#1C4336]" />
            ) : (
              <FaRegHeart className="text-xl" />
            )}
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
