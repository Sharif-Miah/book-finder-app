import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const BookFindAction = ({ onSearchk, onSort }) => {
  const [searchTearm, setSearchTearm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const hadleSearchTearm = (e) => {
    e.preventDefault();
    onSearch(searchTearm);
  };

  //   Sort option start

  const handleSort = (e) => {
    const sortValue = e.target.value;
    onSort(sortValue);
  };

  //   Sort option end

  return (
    <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
      <div>
        <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
        <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
          Trending Books of the Year
        </h2>

        <form>
          <div className="flex">
            <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                placeholder="Search Book"
                value={searchTearm}
                onChange={() => setSearchTearm(event.target.value)}
                required
              />
              <div className="absolute right-0 top-0 flex h-full items-center">
                <button
                  type="submit"
                  className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                  onClick={hadleSearchTearm}
                >
                  <IoMdSearch className="text-xl" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-stretch space-x-3">
        <select
          className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
          name="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={handleSort}
        >
          <option value="">Sort</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="year_asc">Publication Year (Oldest)</option>
          <option value="year_desc">Publication Year (Newest)</option>
        </select>
      </div>
    </div>
  );
};

export default BookFindAction;
