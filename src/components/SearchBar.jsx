import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
    navigate(`/users/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-[#1d2937] border border-gray-500 mx-auto mt-8 relative  max-w-2xl flex flex-col md:flex-row items-center justify-center py-2 px-2 rounded-xl gap-2 shadow-2xl focus-within:border-gray-300 w-full"
    >
      <input
        className="px-6 py-2 w-full rounded-md flex-1 outline-none text-gray-500"
        type="text"
        placeholder="Enter GitHub username (e.g.,torvalds)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className="w-full md:w-auto px-6 py-3 bg-[#145dfb] text-white fill-white active:scale-95 duration-100 will-change-transform overflow-hidden relative rounded-xl transition-all cursor-pointer hover:bg-[#2a6bf7]">
        <div className="flex items-center transition-all ">
          <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto ">
            Search
          </span>
        </div>
      </button>
    </form>
  );
};

export default SearchBar;
