import React, { useState } from "react";
import PageSearch from "../sections/PageSearch";
import Searchbar from "../widget/SearchBar";

function MonthegaSearch() {
  const [search, setSearch] = useState("");
  const [listSearch, setListSearch] = useState([]);

  return (
    <section
      className="h-full min-h-screen bg-blacks flex flex-col items-center sm:w-[425px] md:w-[768px] lg:w-[1440px]"
      id="search"
    >
      <Searchbar
        search={search}
        setSearch={setSearch}
        listSearch={listSearch}
        setListSearch={setListSearch}
      />
      <PageSearch listSearch={listSearch} />
    </section>
  );
}

export default MonthegaSearch;
