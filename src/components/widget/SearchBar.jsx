import axios from "axios";
import React from "react";

function Searchbar({ search, setSearch, setListSearch }) {
  async function getSearch(ev) {
    ev.preventDefault();
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/search.php?s=${search}`
    );

    setListSearch(res.data.meals);
  }

  return (
    <div className="py-10">
      <form onSubmit={getSearch}>
        <input
          onChange={(ev) => setSearch(ev.target.value)}
          value={search}
          className="border-[1.5px] border-yellows w-80 rounded-lg p-2 text-sm text-white focus:border-yellows bg-transparent placeholder-white"
          type="text"
          placeholder="Search menu..."
        />
      </form>
    </div>
  );
}

export default Searchbar;
