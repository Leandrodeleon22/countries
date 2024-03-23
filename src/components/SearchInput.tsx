"use client";
import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  return (
    <div className="mb-[4rem] relative">
      <div className="absolute left-6 top-[14px] z-50">
        <IoSearch size={20} color="gray" />
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="h-[3rem] w-[30rem] px-[1.5rem] pl-[4rem] drop-shadow-md outline-none rounded-md"
      />
    </div>
  );
};

export default SearchInput;
