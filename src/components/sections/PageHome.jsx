import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PageHome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center absolute inset-0">
        <div className="sm:w-96 md:w-2/3 lg:w-4/5 mt-20 py-36">
          <p className="text-center text-white lg:text-xl md:text-lg sm:text-base mb-4 uppercase font-semibold">
            We're Monthega Restaurant
          </p>
          <p className="text-center text-white lg:text-6xl md:text-5xl sm:text-lg uppercase font-bold">
            Making delicious <br /> premium food
          </p>
          <div className="flex justify-center">
            <button className="uppercase py-3 px-4 mt-8 text-white font-bold bg-yellows hover:bg-browns transition duration-500">
              <a href="#categories">Explore Now</a>
            </button>
          </div>
        </div>
        <div className="sm:w-96 md:w-2/3 lg:w-4/5 mt-20">
          <div className="down text-center">
            <h6 className="text-white text-sm">
              And perfection is not a detail
            </h6>
            <FontAwesomeIcon
              className="text-white text-4xl mt-5"
              icon={faArrowDownLong}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHome;
