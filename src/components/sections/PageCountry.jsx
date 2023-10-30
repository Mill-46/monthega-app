import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PageCountry() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  async function fetchCountries() {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/list.php?a=list`
    );
    setCountries(res.data.meals);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex gap-[3.3rem] mt-10 justify-center flex-wrap">
        {currentCountries.map((country) => (
          <Link to={`/country/${country.strArea}`} key={country.strArea}>
            <div className="relative h-[4rem] w-[7rem] overflow-hidden cursor-pointer bg-greys">
              <img
                className="object-cover h-full w-full p-1 brightness-50"
                src={country.strImage}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition duration-500">
                <p className="text-yellows opacity-100 text-sm font-semibold">
                  {country.strArea}
                </p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellows/80 backdrop-blur-0 opacity-0 hover:opacity-100 transition duration-500">
                <p className="text-white opacity-100 text-sm font-semibold">
                  {country.strArea}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination mt-8">
        <ul className="flex justify-center gap-3">
          {Array.from({
            length: Math.ceil(countries.length / itemsPerPage),
          }).map((_, index) => (
            <li key={index}>
              <button
                className="bg-browns hover:bg-yellows text-white font-semibold py-2 px-4 transition duration-300"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PageCountry;
