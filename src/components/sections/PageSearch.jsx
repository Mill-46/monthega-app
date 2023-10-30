import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function PageSearch({ listSearch }) {
  function truncate(str) {
    return str.length > 90 ? str.substring(0, 90) + "..." : str;
  }

  return (
    <div className="flex gap-5 py-10 justify-center flex-wrap">
      {listSearch && listSearch.length > 0 ? (
        listSearch.map((menu) => (
          <div
            className="flex flex-row bg-darkGreys h-[14rem] w-[39rem]"
            key={menu.idMeal}
          >
            <div className="relative overflow-hidden">
              <img
                className="h-full w-[15rem] object-cover"
                src={menu.strMealThumb}
                alt={menu.strMeal}
              />
              <Link to={`/detail/${menu.idMeal}`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-blacks/80 backdrop-blur-0 opacity-0 hover:opacity-100 transition duration-500">
                  <FontAwesomeIcon
                    className="bg-yellows rounded-full flex items-center justify-center h-6 w-6 text-sm p-2"
                    size="sm"
                    color="white"
                    icon={faPlus}
                  />
                </div>
              </Link>
            </div>
            <div className="flex gap-3 w-[24rem] flex-col">
              <p className="bg-browns text-white py-1 px-2 self-end font-semibold">
                {menu.strArea}
              </p>
              <p className="text-darkYellows ms-5 font-semibold text-2xl">
                {menu.strMeal}
              </p>
              <p className="text-lightGrey ms-5 pr-4 text-base text-ellipsis">
                {truncate(menu.strInstructions)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[30rem] flex justify-center items-center">
          <h2 className="text-white text-lg font-semibold">No Data Result</h2>
        </div>
      )}
    </div>
  );
}

export default PageSearch;
